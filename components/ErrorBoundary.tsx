import { GraphQLError } from "graphql/error/GraphQLError";
import React from "react";

type BoundaryError = typeof GraphQLError & {
  name: string;
  message: string;
  source: {
    errors: string[];
  };
};

export class ErrorBoundary extends React.Component<
  unknown,
  { error: BoundaryError | null }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
    };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  override render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="text-pink-700">
            <p>
              <label>name: </label>
              <span>{error.name}</span>
            </p>
            <p>
              <label>message: </label>
              <span>{error.message}</span>
            </p>
            <p>
              <label>errors: </label>
              <span>
                {error?.source?.errors
                  ?.map((e) => (e as any).message)
                  ?.join(", ")}
              </span>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
