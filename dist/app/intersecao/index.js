"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handeResponse = void 0;
function handeResponse(response) {
    if (response.status)
        console.log('[ERROR] - ', { ...response.error });
    console.log('[SUCCESS] - ', response.books);
}
exports.handeResponse = handeResponse;
//# sourceMappingURL=index.js.map