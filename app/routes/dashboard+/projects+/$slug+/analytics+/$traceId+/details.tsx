import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import moment from "moment";
import getTraceDetailsByTraceId from "~/server/services/project/traces/getTraceDetailsByTraceId";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    const { traceId } = params;
    const traces = await getTraceDetailsByTraceId(traceId);
    return { traces };

}

export default function Analytics() {
    const traces = useLoaderData<typeof loader>();
    return (
        <div className="max-w-7xl  ">

            {/* i want to show the traces as timeline based on startunixtimenano and endunixtime */}
            <ul>
                {traces.traces.map((trace) => (
                    <li key={trace.traceId}>
                        <div>
                            <p>{trace.name}</p>
                            <p>{moment(trace.startTimeUnixNano / 1000000).format('DD-MM-YYYY, h:mm:ss a')}</p>
                            <p>{moment(trace.endTimeUnixNano / 1000000).format('DD-MM-YYYY, h:mm:ss a')}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}