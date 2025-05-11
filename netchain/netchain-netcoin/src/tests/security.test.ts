import { describe, it, expect } from '@jest/globals';
import { AnomalyDetector } from '../security/ai-pipeline';

describe('AnomalyDetector', () => {
    let detector: AnomalyDetector;

    beforeEach(() => {
        detector = new AnomalyDetector();
    });

    it('should initialize with default parameters', () => {
        expect(detector).toBeDefined();
        expect(detector.threshold).toBe(0.5); // Assuming default threshold
    });

    it('should detect anomalies correctly', () => {
        const data = [0.1, 0.2, 0.3, 0.9]; // Example data
        const result = detector.detect(data);
        expect(result).toContainEqual(expect.objectContaining({ isAnomaly: true }));
    });

    it('should not detect anomalies in normal data', () => {
        const data = [0.1, 0.2, 0.3, 0.4]; // Normal data
        const result = detector.detect(data);
        expect(result).toEqual(expect.arrayContaining([{ isAnomaly: false }]));
    });

    it('should handle empty data gracefully', () => {
        const result = detector.detect([]);
        expect(result).toEqual([]);
    });
});