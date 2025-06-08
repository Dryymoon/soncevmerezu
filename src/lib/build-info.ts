// lib/build-info.js
import { execSync } from "child_process";

function getGitCommitHash() {
  try {
    return execSync("git rev-parse HEAD").toString().trim();
  } catch {
    return "unknown";
  }
}

function getBuildDate() {
  return new Date().toISOString();
}

export const commitHash = getGitCommitHash();
export const buildDate = getBuildDate();
