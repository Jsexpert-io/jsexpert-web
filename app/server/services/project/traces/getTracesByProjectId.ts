import moment from "moment";


import { ProjectService } from "../../project.server";
import { prisma } from "~/server/utils/db.prisma.server";

async function getTracesByProjectId(slug: any) {
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
        const durationInSeconds = parseInt(endTime as any) - parseInt(startTime as any);
        // Return the desired structure
        return {
            traceId: trace.traceId,
            duration: `${moment.duration(durationInSeconds / 1e6, 'milliseconds').milliseconds().toFixed(2)} ms`,
            path: decodeURIComponent((rootSpan?.attributes as any)['http.target'] as any).replaceAll('+', ''),
            startTime: trace._min.startTimeUnixNano,
            name: rootSpan?.name,
            endTime: trace._max.endTimeUnixNano, traces: records
        };
    }));

    return results;

}

export default getTracesByProjectId;