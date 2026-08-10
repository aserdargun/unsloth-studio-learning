export function batchMetrics({ datasetSize, microBatch, accumulation, gpus = 1, epochs = 1 }) {
  const effectiveBatch = microBatch * accumulation * gpus;
  const optimizerStepsPerEpoch = Math.ceil(datasetSize / effectiveBatch);
  return {
    effectiveBatch,
    optimizerStepsPerEpoch,
    totalOptimizerSteps: optimizerStepsPerEpoch * epochs,
    microStepsPerEpoch: Math.ceil(datasetSize / (microBatch * gpus)),
  };
}

export function contextBudget({ maximum, system = 0, template = 0, input = 0, rag = 0, response = 0 }) {
  const used = system + template + input + rag + response;
  return { used, remaining: maximum - used, fits: used <= maximum };
}

export function loraScale(rank, alpha, useRslora = false) {
  if (rank <= 0) throw new RangeError("rank must be positive");
  return alpha / (useRslora ? Math.sqrt(rank) : rank);
}

export function loraParameterCount(rank, inputDimension, outputDimension, targetMatrices = 1) {
  return rank * (inputDimension + outputDimension) * targetMatrices;
}

export function weightedBenchmark({ domain, format, safety, uncertainty, retention }) {
  return domain * 0.35 + format * 0.15 + safety * 0.2 + uncertainty * 0.15 + retention * 0.15;
}

export function datasetMix(total, percentages) {
  const sum = Object.values(percentages).reduce((acc, value) => acc + value, 0);
  return {
    valid: Math.abs(sum - 100) < 0.001,
    sum,
    counts: Object.fromEntries(Object.entries(percentages).map(([key, value]) => [key, Math.round(total * value / 100)])),
  };
}
