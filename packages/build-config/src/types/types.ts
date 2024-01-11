export interface BuildPaths {
  entry: string;
  output: string;
  public: string;
  html: string;
  src: string;
}

export type BuildMode = "development" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  platform: BuildPlatform;
  analyzer?: boolean;
}
