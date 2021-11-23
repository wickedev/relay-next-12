import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { UploadableMap } from "relay-runtime/lib/network/RelayNetworkTypes";
import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode";
import {
  CacheConfig,
  Variables,
} from "relay-runtime/lib/util/RelayRuntimeTypes";
import { fetchGraphQL } from "~/lib/fetchGraphQL";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(
  request: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables?: UploadableMap | null
) {
  console.log(
    `fetching query ${request.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(request, variables, cacheConfig, uploadables);
}

export function createEnvironment(records: {}): Environment {
  const network = Network.create(fetchRelay);
  const source = new RecordSource(records);
  const store = new Store(source, {
    gcReleaseBufferSize: 10,
  });

  const isServer = typeof global === "undefined";

  if (isServer) {
    return new Environment({
      configName: "server",
      network,
      store,
    });
  }

  return new Environment({
    configName: "client",
    network,
    store,
  });
}
