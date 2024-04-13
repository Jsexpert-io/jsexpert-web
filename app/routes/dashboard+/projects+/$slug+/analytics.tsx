import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProjectTracesTable from "~/components/projects/projectDetails/projectTracesTable";
import { tracesService } from "~/server/services/project/traces.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
    const { slug } = params;
    const traces = await tracesService.getTracesByProjectID(slug);
    return { traces };

}

export default function Analytics() {
    const traces = useLoaderData<typeof loader>();
    return (
        <div className="max-w-7xl  ">

            <ProjectTracesTable traces={traces.traces} />
        </div>
    )
}
