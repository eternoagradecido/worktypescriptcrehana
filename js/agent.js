"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agent = /** @class */ (function () {
    function agent(_idAgent, _passwordAgent) {
        this._idAgent = _idAgent;
        this._passwordAgent = _passwordAgent;
    }
    Object.defineProperty(agent.prototype, "useridagent", {
        get: function () {
            return this._idAgent;
        },
        set: function (useridagent) {
            this._idAgent = useridagent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(agent.prototype, "userpasswordagent", {
        get: function () {
            return this._passwordAgent;
        },
        set: function (userpasswordagent) {
            this._passwordAgent = userpasswordagent;
        },
        enumerable: true,
        configurable: true
    });
    return agent;
}());
exports.agent = agent;
var usersAgents = [];
var agent1 = new agent('slan48', 'crehana');
usersAgents.push(agent1);
exports.getagent = function () {
    return usersAgents;
};
