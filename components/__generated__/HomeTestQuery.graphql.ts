/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type HomeTestQueryVariables = {};
export type HomeTestQueryResponse = {
    readonly test: number;
};
export type HomeTestQuery = {
    readonly response: HomeTestQueryResponse;
    readonly variables: HomeTestQueryVariables;
};



/*
query HomeTestQuery {
  test
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "test",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeTestQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeTestQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5e8d3d7575cd8d41f58851bd0648b6a3",
    "id": null,
    "metadata": {},
    "name": "HomeTestQuery",
    "operationKind": "query",
    "text": "query HomeTestQuery {\n  test\n}\n"
  }
};
})();
(node as any).hash = 'e8fb3bb21e6727eb356b0de1bb389630';
export default node;
