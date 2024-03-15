import { User } from "@prisma/client";
import { json } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { prisma } from "~/server/utils/db.prisma.server";

export const ROLETYPEVALUE = {
    Super_Admin: 'Super_Admin',
    Developer: 'Developer',

}

export type RoleType = keyof typeof ROLETYPEVALUE;

export type { User } from "@prisma/client";

export class UserService {
    async getUserProfileById(id: any) {
        console.log("id", id);
        return prisma.user
            .findUnique({
                where: { id: (id) },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    image: true,
                    bio: true,
                    github: true,
                    linkedin: true,
                    twitter: true,
                    website: true,

                    UserRole: {
                        include: {
                            role: {
                                select: {
                                    id: true,
                                },
                            },
                        },
                    },
                },
            })

    }
    async getUserById(id: any) {
        console.log("id", id);
        return prisma.user
            .findUnique({
                where: { id: (id) },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    UserRole: {
                        include: {
                            role: {
                                select: {
                                    id: true,
                                },
                            },
                        },
                    },
                },
            })
            .then((res) => {
                return {
                    id: res?.id,
                    email: res?.email,
                    name: res?.name,
                    roleId: res?.UserRole?.role?.id,
                };
            });
    }
    comparePassword(
        password: User["password"],
        hashedPassword: User["password"]
    ) {
        return bcrypt.compare(password, hashedPassword);
    }
    async getUserByemail(email: User["email"]) {
        return prisma.user.findUnique({ where: { email } });
    }
    async getUsers() {
        return prisma.user.findMany({});
    }

    async register(
        type: RoleType,
        email: User["email"],
        password: User["password"],
        name: User["name"],
        image?: any
    ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const uniqueKey = await bcrypt.hash(email, 10);
        if (!type) {
            throw json({ message: "InValid Request" }, { status: 401 });
        }

        let role = await prisma.role
            .findFirst({
                where: {
                    name: ROLETYPEVALUE.Developer,
                },
                select: {
                    id: true,
                }
            })
            .then((res) => {
                return res?.id;
            });

        console.log("role", role, type);
        if (!role) {
            role = await prisma.role.create({
                data: {
                    name: ROLETYPEVALUE.Developer,
                },
                select: {
                    id: true,
                },
            }).then((res) => {
                return res?.id;
            });
        }


        return prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                uniqueKey,
                name: name,
                image: image,

                UserRole: {
                    create: {
                        roleId: role,
                    },
                },
            },
            select: {
                id: true,
                email: true,
                name: true,

                UserRole: {
                    include: {
                        role: true,
                    },
                },
            },
        });
    }

    async deleteUserById(id: any) {
        await prisma.userRole.deleteMany({
            where: {
                userId: (id),
            },
        });

        return prisma.user.delete({ where: { id: (id) } });
    }
    async updateUserPasswordById(
        id: User["id"],
        password: User["password"],
        newPassword: User["password"]
    ) {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw json({ message: "No user found with this email" }, { status: 401 });
        }
        const valid = await this.comparePassword(password, user.password);
        if (!valid) {
            throw json({ message: "Incorrect Password" }, { status: 401 });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        return prisma.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
    }

    async login(email: User["email"], password: User["password"]) {
        console.log("user", email);
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                },
            },
            include: {
                UserRole: {
                    include: {
                        role: true,
                    },
                },

            },
        });
        if (!user) {
            throw json({ message: "No user found with this email" }, { status: 401 });
        }

        const valid = await this.comparePassword(password, user.password);
        if (!valid) {
            throw json({ message: "Incorrect Password" }, { status: 401 });
        }

        const role = (user.UserRole as any).role.id;
        const type = (user.UserRole as any).role.name;
        return {
            email: user.email,
            id: user.id,
            role,
            type,
            name: user.name,

        };
    }
    async loginByGoogle(profile: any) {
        console.log("user", profile);
        const email = profile.emails[0].value
        let user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                email: true,
                name: true,
                image: true,
                UserRole: {
                    include: {
                        role: true,
                    },
                }

            }
        });
        if (!user) {
            await this.register('Developer', email, "123456", profile?.displayName,
                { url: profile?.photos[0]?.value }
            )
            user = await prisma.user.findFirst({
                where: {
                    email: {
                        equals: email,
                        mode: "insensitive",
                    },
                },
                include: {
                    UserRole: {
                        include: {
                            role: true,
                        },
                    },

                },
            });
            if (!user) {
                throw json({ message: "No user found with this email" }, { status: 401 });
            }
        } else {
            user = await this.updateUserById({ id: user.id, name: profile?.displayName, image: { url: profile?.photos[0]?.value } })
        }



        const role = (user.UserRole as any).role.id;
        const type = (user.UserRole as any).role.name;

        console.log("user", {
            email: user.email,
            id: user.id,
            role,
            type,
            name: user.name,
            image: user.image
        });
        return {
            email: user.email,
            id: user.id,
            role,
            type,
            name: user.name,
            image: user.image

        };
    }
    async updateUserById({ id, name, image }: any) {
        // const hashedPassword = await bcrypt.hash(password, 10);
        console.log("updateUserById", id, name);
        const data: any = {
            name,

        }
        const eixstingUser = await prisma.user.findUnique({
            where: { id: (id) },
            select: {
                image: true
            }

        })
        if (!(eixstingUser?.image as any)?.key && image) {
            data.image = image
        }
        return prisma.user.update({
            where: { id: (id) },
            data,
            include: {
                UserRole: {
                    include: {
                        role: true,
                    },
                },

            },
        });
    }

    async updateUserProfile({ id, name, media, bio, github, linkedin, twitter, website }: any, tags: any) {
        // const hashedPassword = await bcrypt.hash(password, 10);

        const data: any = {
            name,
            bio,
            github,
            linkedin,
            twitter,
            website,
            image: media

        }

        console.log("updateUserProfile", id, data);

        // const eixstingUser = await prisma.user.findUnique({
        //   where: { id: (id) },
        //   select: {
        //     image: true
        //   }

        // })
        // if (!(eixstingUser?.image as any)?.key && image) {
        //   data.image = image
        // }
        return prisma.user.update({
            where: { id: (id) },
            data,
            include: {
                UserRole: {
                    include: {
                        role: true,
                    },
                },

            },

        });
    }


}
