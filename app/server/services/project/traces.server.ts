import { prisma } from "~/server/utils/db.prisma.server";
import { ProjectService } from "../project.server";

async function getTracesByProjectID(slug: any) {
    const projectService = new ProjectService();
    const project = await projectService.findProjectIDBySlug(slug)
    const traceIds = await prisma.trace.groupBy({
        by: ['traceId'],
        where: {
            projectId: project?.id
        },
        _min: {
            startTimeUnixNano: true
        },
        _max: {
            endTimeUnixNano: true
        },
        orderBy: {
            traceId: 'desc'
        },
        take: 10,

    })
    const results = await Promise.all(traceIds.map(async (trace) => {
        const records = await prisma.trace.findMany({
            where: { traceId: trace.traceId },
            orderBy: { startTimeUnixNano: 'asc' }
        });

        const rootSpan = records.find((record) => !record.parentSpanId);
        const startTime = rootSpan?.startTimeUnixNano;
        const endTime = rootSpan?.endTimeUnixNano;
        // Return the desired structure
        return {
            traceId: trace.traceId,
            path: decodeURIComponent(rootSpan?.attributes['http.target']).replaceAll('+', ''),
            startTime: trace._min.startTimeUnixNano,
            name: rootSpan?.name,
            endTime: trace._max.endTimeUnixNano, traces: records
        };
    }));

    return results;

}

export const tracesService = {
    getTracesByProjectID
}