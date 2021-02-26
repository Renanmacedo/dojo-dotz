"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (state) => {
    switch (state.status) {
        case "success":
            console.log('[state]', state.response);
            break;
        case "loading":
            console.info('[loading]', state.status);
            break;
        case "error":
            console.error('[error]', state.status);
            break;
    }
};
//# sourceMappingURL=index.js.map