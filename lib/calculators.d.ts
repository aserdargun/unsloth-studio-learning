export interface BatchInput { datasetSize: number; microBatch: number; accumulation: number; gpus?: number; epochs?: number }
export function batchMetrics(input: BatchInput): { effectiveBatch: number; optimizerStepsPerEpoch: number; totalOptimizerSteps: number; microStepsPerEpoch: number };
export function contextBudget(input: { maximum: number; system?: number; template?: number; input?: number; rag?: number; response?: number }): { used: number; remaining: number; fits: boolean };
export function loraScale(rank: number, alpha: number, useRslora?: boolean): number;
export function loraParameterCount(rank: number, inputDimension: number, outputDimension: number, targetMatrices?: number): number;
export function weightedBenchmark(input: { domain: number; format: number; safety: number; uncertainty: number; retention: number }): number;
export function datasetMix(total: number, percentages: Record<string, number>): { valid: boolean; sum: number; counts: Record<string, number> };
