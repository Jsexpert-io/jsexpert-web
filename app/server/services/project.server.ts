import { v4 } from "uuid";
import { prisma } from "../utils/db.prisma.server";
import { createInputHash } from "../utils/email.server";


export const PROJECTROLE = {
    Admin: 'Admin',
    Member: 'Member',
    Owner: 'Owner'
}
export interface CreateProjectDto {
    name: string;
    description: string;
}
export class ProjectService {
    findByClientId(clientId: any) {
        return prisma.project.findUnique({
            where: {
                clientId
            }
        })
    }
    createUniqueSlug(slug: string): any {
        return prisma.project.count({
            where: {
                slug
            }
        }).then(res => {
            if (res > 0) {
                return this.createUniqueSlug(slug + Date.now())
            }
            return slug
        })
    }
    async create(createprojectDto: CreateProjectDto, userId: string) {
        const slug = createprojectDto.name.split(' ').join('-').toLowerCase()
        const uniqueSlug = await this.createUniqueSlug(slug)
        let projectRole = await prisma.projectRole.findFirst({
            where: {
                name: PROJECTROLE.Owner
            },
            select: {
                id: true
            }
        })
        if (!projectRole) {
            projectRole = await prisma.projectRole.create({
                data: {
                    name: PROJECTROLE.Owner
                },
                select: {
                    id: true
                }
            })
        }

        return prisma.project.create({
            data: {
                ...createprojectDto,
                isActive: true,
                slug: uniqueSlug,
                description: createprojectDto.description,
                user: {
                    connect: {
                        id: userId
                    }
                },
                ProjectMember: {
                    create: {
                        userId,
                        projectRoleId: projectRole.id
                    }
                },
                clientSecret: createInputHash(createprojectDto.name + userId + v4()),
                clientId: v4()
            }
        })

    }

    findAllByUser(userId: string) {
        return prisma.project.findMany({
            where: {
                user: {
                    id: userId
                }
            },
            select: {
                name: true,
                id: true,
                description: true,
                clientSecret: true,
                clientId: true,
                isActive: true,
                slug: true,
            }
        })
    }

    findOne(id: string) {
        return prisma.project.findUnique({
            where: {
                id
            }

        })
    }
    findOneBySlug(slug: string) {
        return prisma.project.findUnique({
            where: {
                slug
            },
            select: {
                clientId: true,
                clientSecret: true,
                name: true, slug: true,
                description: true,
                user: {
                    select: {
                        email: true
                    }
                },
                id: true,
            }

        })

    }
    findProjectIDBySlug(slug: string) {
        return prisma.project.findUnique({
            where: {
                slug
            },
            select: {
                id: true,
            }

        })

    }
    update(id: string, updateprojectDto: CreateProjectDto) {
        return prisma.project.update({
            where: {
                id
            },
            data: {
                ...updateprojectDto
            }

        })
    }

    async remove(id: string, userId: string) {


        return prisma.project.delete({
            where: {
                id, userId
            }
        })
    }
}
