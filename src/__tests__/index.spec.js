import { HTML5Backend } from '../index';
describe('index', () => {
    it('should return HTML5 backend', () => {
        const mockManager = {
            getActions: () => null,
            getMonitor: () => null,
            getRegistry: () => null,
        };
        const backend = HTML5Backend(mockManager);
        expect(backend).toBeDefined();
    });
});
