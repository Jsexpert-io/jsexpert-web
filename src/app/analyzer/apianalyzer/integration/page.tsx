'use client'
import { useAppSelector } from "@/State/store"

export default function Page() {
  const { project } = useAppSelector(state => state.projectState)
  return (
    <div className="container mx-auto max-w-6xl">


      <article className="prose prose-slate">
        <h4 className="text-2xl font-bold">API Analyzer</h4>
        <p>
          The API Analyzer is a tool that allows you to analyze the performance of your API. It
          provides a detailed report of the APIs performance, including response time, error rate, and
          throughput. You can use this information to identify bottlenecks and optimize your API for
          better performance.
        </p>
        <h4 className="text-2xl font-bold">Step 1. Install OpenTelemetry packages</h4>
        <pre><code
          dangerouslySetInnerHTML={{
            __html: `npm install --save @opentelemetry/api@^1.6.0 
npm install --save @opentelemetry/sdk-node@^0.45.0
npm install --save @opentelemetry/auto-instrumentations-node@^0.39.4
npm install --save @opentelemetry/exporter-trace-otlp-http@^0.45.0`
          }}
          className="language-js">
        </code></pre>
        <h4 className="text-2xl font-bold">Step 2. Create tracing.js file</h4>
        <p>
          You need to create a file called tracing.js in the root of your project. and configure our endpoint.
        </p>
        <pre>
          <code>
            {
              `import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ExpressLayerType } from '@opentelemetry/instrumentation-express';
import { Resource } from '@opentelemetry/resources';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const exporterOptions = {
  url: 'https://api.jsexpert.io/v1/traces',
  headers: {
    clientId: '${project?.clientId}',
    clientSecret:'${project?.clientSecret}',
  },
};

const traceExporter = new OTLPTraceExporter(exporterOptions);
const jsexpertSdkInstance = new NodeSDK({
  traceExporter,
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-mongodb': {
        enabled: true,
        enhancedDatabaseReporting: true,
      },
      '@opentelemetry/instrumentation-express': {
        ignoreLayersType: [ExpressLayerType.MIDDLEWARE],
        requestHook: (span, requestInfo) => {
          span.setAttribute(
            'http.request.body',
            JSON.stringify(requestInfo.request.body),
          );

          span.setAttribute(
            'http.request.headers',
            JSON.stringify(requestInfo.request.headers),
          );
        },
      },
    }),
  ],
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "${project.name}-server",
  }),
});

export default jsexpertSdkInstance;

            `
            }
          </code>
        </pre>

        <h4 className="text-2xl font-bold">Step 3. Start The Instance At App Start Once</h4>
        <p>
          You need to start the instance at the start of your app. You can do this in your main file.
        </p>
        <pre>
          <code>
            {
              `import jsexpertProfiler from './tracing';
jsexpertProfiler.start();`
            }
          </code>
        </pre>


      </article>
    </div>
  )
}
