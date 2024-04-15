import { prisma } from "~/server/utils/db.prisma.server";



async function getTraceDetailsByTraceId(traceId: any) {

    const traces = await prisma.trace.findMany({
        where: {
            traceId: traceId
        },
        select: {
            traceId: true,
            endTimeUnixNano: true,
            startTimeUnixNano: true,
            name: true,
            spanId: true,
            parentSpanId: true,

        },
        orderBy: {
            startTimeUnixNano: 'desc'
        },
    })

    return traces;

}

export default getTraceDetailsByTraceId;