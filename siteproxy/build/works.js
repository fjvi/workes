const a0_0xf584a2 = function () {
    let _0x2d08ae = true;
    return function (_0x5bcf67, _0x715408) {
        const _0x5271f8 = _0x2d08ae ? function () {
            if (_0x715408) {
                const _0x2d4a9d = _0x715408.apply(_0x5bcf67, arguments);
                _0x715408 = null;
                return _0x2d4a9d;
            }
        } : function () { };
        _0x2d08ae = false;
        return _0x5271f8;
    };
}();
(function () {
    a0_0xf584a2(this, function () {
        const _0x3c95b9 = new RegExp("function *\\( *\\)");
        const _0x13e917 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x1c49d7 = a0_0x45b515('init');
        if (!_0x3c95b9.test(_0x1c49d7 + 'chain') || !_0x13e917.test(_0x1c49d7 + "input")) {
            _0x1c49d7('0');
        } else {
            a0_0x45b515();
        }
    })();
})();
var a0_0x40b8a9 = {
    'Stringify': 0x1,
    'BeforeStream': 0x2,
    'Stream': 0x3
};
var a0_0x5772a0 = (_0xac0d98, _0x3b8948) => {
    const _0xd3e134 = new String(_0xac0d98);
    _0xd3e134.isEscaped = true;
    _0xd3e134.callbacks = _0x3b8948;
    return _0xd3e134;
};
var a0_0x492637 = async (_0x58abf9, _0x175f1c, _0xb6e9b6, _0x3e207c, _0x321350) => {
    const _0x2d22e8 = _0x58abf9.callbacks;
    if (!_0x2d22e8?.["length"]) {
        return Promise.resolve(_0x58abf9);
    }
    if (_0x321350) {
        _0x321350[0x0] += _0x58abf9;
    } else {
        _0x321350 = [_0x58abf9];
    }
    const _0x56da31 = Promise.all(_0x2d22e8.map(_0x4ed6bd => _0x4ed6bd({
        'phase': _0x175f1c,
        'buffer': _0x321350,
        'context': _0x3e207c
    }))).then(_0x401b55 => Promise.all(_0x401b55.filter(Boolean).map(_0x4f6c67 => a0_0x492637(_0x4f6c67, _0x175f1c, false, _0x3e207c, _0x321350))).then(() => _0x321350[0x0]));
    if (_0xb6e9b6) {
        return a0_0x5772a0(await _0x56da31, _0x2d22e8);
    } else {
        return _0x56da31;
    }
};
var a0_0x2ca092 = (_0x1282fc, _0x566d47, _0x36911a) => {
    if (!_0x566d47.has(_0x1282fc)) {
        throw TypeError("Cannot " + _0x36911a);
    }
};
var a0_0x3b775a = (_0x1945d5, _0x89c41a, _0x1454a3) => {
    a0_0x2ca092(_0x1945d5, _0x89c41a, "read from private field");
    return _0x1454a3 ? _0x1454a3.call(_0x1945d5) : _0x89c41a.get(_0x1945d5);
};
var a0_0x32c0f4 = (_0x533c1c, _0x550ab7, _0x4079dc) => {
    if (_0x550ab7.has(_0x533c1c)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x550ab7 instanceof WeakSet) {
        _0x550ab7.add(_0x533c1c);
    } else {
        _0x550ab7.set(_0x533c1c, _0x4079dc);
    }
};
var a0_0x232722 = (_0x45b111, _0x2838d3, _0x1a6979, _0x3d4873) => {
    a0_0x2ca092(_0x45b111, _0x2838d3, "write to private field");
    if (_0x3d4873) {
        _0x3d4873.call(_0x45b111, _0x1a6979);
    } else {
        _0x2838d3.set(_0x45b111, _0x1a6979);
    }
    return _0x1a6979;
};
var a0_0x3c8c8c = (_0x555fde, _0x50c142 = {}) => {
    Object.entries(_0x50c142).forEach(([_0x403e79, _0x19042d]) => _0x555fde.set(_0x403e79, _0x19042d));
    return _0x555fde;
};
var a0_0x37e6c9;
var a0_0x4a06c7;
var a0_0x3ad3b2;
var a0_0x1245c2;
var a0_0x58f8fb;
var a0_0x41dfb7;
var a0_0x32cd3e = class {
    constructor(_0x40b8b9, _0x444098) {
        this.env = {};
        this._var = {};
        this.finalized = false;
        this.error = undefined;
        a0_0x32c0f4(this, a0_0x37e6c9, 0xc8);
        a0_0x32c0f4(this, a0_0x4a06c7, undefined);
        a0_0x32c0f4(this, a0_0x3ad3b2, undefined);
        a0_0x32c0f4(this, a0_0x1245c2, undefined);
        a0_0x32c0f4(this, a0_0x58f8fb, undefined);
        a0_0x32c0f4(this, a0_0x41dfb7, true);
        this.layout = undefined;
        this.renderer = _0x1d52d2 => this.html(_0x1d52d2);
        this.notFoundHandler = () => new Response();
        this.render = (..._0x204ae5) => this.renderer(..._0x204ae5);
        this.setLayout = _0x2e91ad => this.layout = _0x2e91ad;
        this.getLayout = () => this.layout;
        this.setRenderer = _0x993ce8 => {
            this.renderer = _0x993ce8;
        };
        this.header = (_0x19c263, _0xa68c81, _0x3ab9ea) => {
            if (_0xa68c81 === undefined) {
                if (a0_0x3b775a(this, a0_0x3ad3b2)) {
                    a0_0x3b775a(this, a0_0x3ad3b2)['delete'](_0x19c263);
                } else if (a0_0x3b775a(this, a0_0x1245c2)) {
                    delete a0_0x3b775a(this, a0_0x1245c2)[_0x19c263.toLocaleLowerCase()];
                }
                if (this.finalized) {
                    this.res.headers['delete'](_0x19c263);
                }
                return;
            }
            if (_0x3ab9ea?.['append']) {
                if (!a0_0x3b775a(this, a0_0x3ad3b2)) {
                    a0_0x232722(this, a0_0x41dfb7, false);
                    a0_0x232722(this, a0_0x3ad3b2, new Headers(a0_0x3b775a(this, a0_0x1245c2)));
                    a0_0x232722(this, a0_0x1245c2, {});
                }
                a0_0x3b775a(this, a0_0x3ad3b2).append(_0x19c263, _0xa68c81);
            } else {
                if (a0_0x3b775a(this, a0_0x3ad3b2)) {
                    a0_0x3b775a(this, a0_0x3ad3b2).set(_0x19c263, _0xa68c81);
                } else {
                    a0_0x3b775a(this, a0_0x1245c2) ?? a0_0x232722(this, a0_0x1245c2, {});
                    a0_0x3b775a(this, a0_0x1245c2)[_0x19c263.toLowerCase()] = _0xa68c81;
                }
            }
            if (this.finalized) {
                if (_0x3ab9ea?.['append']) {
                    this.res.headers.append(_0x19c263, _0xa68c81);
                } else {
                    this.res.headers.set(_0x19c263, _0xa68c81);
                }
            }
        };
        this.status = _0x2cbbf1 => {
            a0_0x232722(this, a0_0x41dfb7, false);
            a0_0x232722(this, a0_0x37e6c9, _0x2cbbf1);
        };
        this.set = (_0x158aa2, _0x26bf42) => {
            this._var ?? (this._var = {});
            this._var[_0x158aa2] = _0x26bf42;
        };
        this.get = _0xc10c6 => {
            return this._var ? this._var[_0xc10c6] : undefined;
        };
        this.newResponse = (_0x141b7d, _0x583e75, _0xa9dd39) => {
            if (a0_0x3b775a(this, a0_0x41dfb7) && !_0xa9dd39 && !_0x583e75 && a0_0x3b775a(this, a0_0x37e6c9) === 0xc8) {
                return new Response(_0x141b7d, {
                    'headers': a0_0x3b775a(this, a0_0x1245c2)
                });
            }
            if (_0x583e75 && typeof _0x583e75 !== "number") {
                const _0xaaefb = a0_0x3c8c8c(new Headers(_0x583e75.headers), a0_0x3b775a(this, a0_0x1245c2));
                return new Response(_0x141b7d, {
                    'headers': _0xaaefb,
                    'status': _0x583e75.status ?? a0_0x3b775a(this, a0_0x37e6c9)
                });
            }
            const _0x23cdb6 = typeof _0x583e75 === "number" ? _0x583e75 : a0_0x3b775a(this, a0_0x37e6c9);
            a0_0x3b775a(this, a0_0x1245c2) ?? a0_0x232722(this, a0_0x1245c2, {});
            a0_0x3b775a(this, a0_0x3ad3b2) ?? a0_0x232722(this, a0_0x3ad3b2, new Headers());
            a0_0x3c8c8c(a0_0x3b775a(this, a0_0x3ad3b2), a0_0x3b775a(this, a0_0x1245c2));
            if (a0_0x3b775a(this, a0_0x58f8fb)) {
                a0_0x3b775a(this, a0_0x58f8fb).headers.forEach((_0x1d3b01, _0x2b1aa5) => {
                    a0_0x3b775a(this, a0_0x3ad3b2)?.["set"](_0x2b1aa5, _0x1d3b01);
                });
                a0_0x3c8c8c(a0_0x3b775a(this, a0_0x3ad3b2), a0_0x3b775a(this, a0_0x1245c2));
            }
            _0xa9dd39 ?? (_0xa9dd39 = {});
            for (const [_0x7cf515, _0x49cf45] of Object.entries(_0xa9dd39)) {
                if (typeof _0x49cf45 === "string") {
                    a0_0x3b775a(this, a0_0x3ad3b2).set(_0x7cf515, _0x49cf45);
                } else {
                    a0_0x3b775a(this, a0_0x3ad3b2)["delete"](_0x7cf515);
                    for (const _0x175b1a of _0x49cf45) {
                        a0_0x3b775a(this, a0_0x3ad3b2).append(_0x7cf515, _0x175b1a);
                    }
                }
            }
            return new Response(_0x141b7d, {
                'status': _0x23cdb6,
                'headers': a0_0x3b775a(this, a0_0x3ad3b2)
            });
        };
        this.body = (_0x4cfe05, _0x214ec6, _0x5795ba) => {
            return typeof _0x214ec6 === "number" ? this.newResponse(_0x4cfe05, _0x214ec6, _0x5795ba) : this.newResponse(_0x4cfe05, _0x214ec6);
        };
        this.text = (_0x553c2d, _0x3fd03c, _0x29b8d0) => {
            if (!a0_0x3b775a(this, a0_0x1245c2)) {
                if (a0_0x3b775a(this, a0_0x41dfb7) && !_0x29b8d0 && !_0x3fd03c) {
                    return new Response(_0x553c2d);
                }
                a0_0x232722(this, a0_0x1245c2, {});
            }
            a0_0x3b775a(this, a0_0x1245c2)["content-type"] = "text/plain; charset=UTF-8";
            return typeof _0x3fd03c === "number" ? this.newResponse(_0x553c2d, _0x3fd03c, _0x29b8d0) : this.newResponse(_0x553c2d, _0x3fd03c);
        };
        this.json = (_0x20a59d, _0x23be0f, _0x54f9f1) => {
            const _0x27b9b1 = JSON.stringify(_0x20a59d);
            a0_0x3b775a(this, a0_0x1245c2) ?? a0_0x232722(this, a0_0x1245c2, {});
            a0_0x3b775a(this, a0_0x1245c2)["content-type"] = "application/json; charset=UTF-8";
            return typeof _0x23be0f === 'number' ? this.newResponse(_0x27b9b1, _0x23be0f, _0x54f9f1) : this.newResponse(_0x27b9b1, _0x23be0f);
        };
        this.html = (_0x56eba0, _0x45c28a, _0x473940) => {
            a0_0x3b775a(this, a0_0x1245c2) ?? a0_0x232722(this, a0_0x1245c2, {});
            a0_0x3b775a(this, a0_0x1245c2)["content-type"] = "text/html; charset=UTF-8";
            if (typeof _0x56eba0 === 'object') {
                if (!(_0x56eba0 instanceof Promise)) {
                    _0x56eba0 = _0x56eba0.toString();
                }
                if (_0x56eba0 instanceof Promise) {
                    return _0x56eba0.then(_0x3d7c0b => a0_0x492637(_0x3d7c0b, 0x1, false, {})).then(_0x4889a3 => {
                        return typeof _0x45c28a === "number" ? this.newResponse(_0x4889a3, _0x45c28a, _0x473940) : this.newResponse(_0x4889a3, _0x45c28a);
                    });
                }
            }
            return typeof _0x45c28a === 'number' ? this.newResponse(_0x56eba0, _0x45c28a, _0x473940) : this.newResponse(_0x56eba0, _0x45c28a);
        };
        this.redirect = (_0x223cfd, _0x58e00d = 0x12e) => {
            a0_0x3b775a(this, a0_0x3ad3b2) ?? a0_0x232722(this, a0_0x3ad3b2, new Headers());
            a0_0x3b775a(this, a0_0x3ad3b2).set("Location", _0x223cfd);
            return this.newResponse(null, _0x58e00d);
        };
        this.notFound = () => {
            return this.notFoundHandler(this);
        };
        this.req = _0x40b8b9;
        if (_0x444098) {
            a0_0x232722(this, a0_0x4a06c7, _0x444098.executionCtx);
            this.env = _0x444098.env;
            if (_0x444098.notFoundHandler) {
                this.notFoundHandler = _0x444098.notFoundHandler;
            }
        }
    }
    get ["event"]() {
        if (a0_0x3b775a(this, a0_0x4a06c7) && 'respondWith' in a0_0x3b775a(this, a0_0x4a06c7)) {
            return a0_0x3b775a(this, a0_0x4a06c7);
        } else {
            throw Error("This context has no FetchEvent");
        }
    }
    get ['executionCtx']() {
        if (a0_0x3b775a(this, a0_0x4a06c7)) {
            return a0_0x3b775a(this, a0_0x4a06c7);
        } else {
            throw Error("This context has no ExecutionContext");
        }
    }
    get ['res']() {
        a0_0x232722(this, a0_0x41dfb7, false);
        return a0_0x3b775a(this, a0_0x58f8fb) || a0_0x232722(this, a0_0x58f8fb, new Response("404 Not Found", {
            'status': 0x194
        }));
    }
    set ["res"](_0x340f68) {
        a0_0x232722(this, a0_0x41dfb7, false);
        if (a0_0x3b775a(this, a0_0x58f8fb) && _0x340f68) {
            a0_0x3b775a(this, a0_0x58f8fb).headers["delete"]('content-type');
            for (const [_0x2901b2, _0x5463ef] of a0_0x3b775a(this, a0_0x58f8fb).headers.entries()) {
                if (_0x2901b2 === "set-cookie") {
                    const _0x199e4e = a0_0x3b775a(this, a0_0x58f8fb).headers.getSetCookie();
                    _0x340f68.headers["delete"]('set-cookie');
                    for (const _0x576359 of _0x199e4e) {
                        _0x340f68.headers.append('set-cookie', _0x576359);
                    }
                } else {
                    _0x340f68.headers.set(_0x2901b2, _0x5463ef);
                }
            }
        }
        a0_0x232722(this, a0_0x58f8fb, _0x340f68);
        this.finalized = true;
    }
    get ["var"]() {
        return {
            ...this._var
        };
    }
};
a0_0x37e6c9 = new WeakMap();
a0_0x4a06c7 = new WeakMap();
a0_0x3ad3b2 = new WeakMap();
a0_0x1245c2 = new WeakMap();
a0_0x58f8fb = new WeakMap();
a0_0x41dfb7 = new WeakMap();
var a0_0xe20713 = (_0xed4b4a, _0x461ba7, _0x1ba593) => {
    return (_0x14b3a0, _0x2e2b9f) => {
        let _0x5b878e = -0x1;
        return _0x52e6a1(0x0);
        async function _0x52e6a1(_0x4b19d0) {
            if (_0x4b19d0 <= _0x5b878e) {
                throw new Error("next() called multiple times");
            }
            _0x5b878e = _0x4b19d0;
            let _0x228655;
            let _0x38b6d7 = false;
            let _0x219b6b;
            if (_0xed4b4a[_0x4b19d0]) {
                _0x219b6b = _0xed4b4a[_0x4b19d0][0x0][0x0];
                if (_0x14b3a0 instanceof a0_0x32cd3e) {
                    _0x14b3a0.req.routeIndex = _0x4b19d0;
                }
            } else {
                _0x219b6b = _0x4b19d0 === _0xed4b4a.length && _0x2e2b9f || undefined;
            }
            if (!_0x219b6b) {
                if (_0x14b3a0 instanceof a0_0x32cd3e && _0x14b3a0.finalized === false && _0x1ba593) {
                    _0x228655 = await _0x1ba593(_0x14b3a0);
                }
            } else {
                try {
                    _0x228655 = await _0x219b6b(_0x14b3a0, () => {
                        return _0x52e6a1(_0x4b19d0 + 0x1);
                    });
                } catch (_0x1abfec) {
                    if (_0x1abfec instanceof Error && _0x14b3a0 instanceof a0_0x32cd3e && _0x461ba7) {
                        _0x14b3a0.error = _0x1abfec;
                        _0x228655 = await _0x461ba7(_0x1abfec, _0x14b3a0);
                        _0x38b6d7 = true;
                    } else {
                        throw _0x1abfec;
                    }
                }
            }
            if (_0x228655 && (_0x14b3a0.finalized === false || _0x38b6d7)) {
                _0x14b3a0.res = _0x228655;
            }
            return _0x14b3a0;
        }
    };
};
var a0_0xe2f2d3 = class extends Error {
    constructor(_0x58aaf8 = 0x1f4, _0x1e7d8e) {
        super(_0x1e7d8e?.["message"]);
        this.res = _0x1e7d8e?.["res"];
        this.status = _0x58aaf8;
    }
    ["getResponse"]() {
        if (this.res) {
            return this.res;
        }
        return new Response(this.message, {
            'status': this.status
        });
    }
};
var a0_0x5dd5c5 = async (_0x4e1ad9, _0x328a91 = {
    'all': false
}) => {
    const _0x986b0b = _0x4e1ad9 instanceof a0_0x3de4a3 ? _0x4e1ad9.raw.headers : _0x4e1ad9.headers;
    const _0x361d55 = _0x986b0b.get("Content-Type");
    if (a0_0x41d4a4(_0x361d55)) {
        return a0_0x4ecfe0(_0x4e1ad9, _0x328a91);
    }
    return {};
};
function a0_0x41d4a4(_0x2524bb) {
    if (_0x2524bb === null) {
        return false;
    }
    return _0x2524bb.startsWith("multipart/form-data") || _0x2524bb.startsWith("application/x-www-form-urlencoded");
}
async function a0_0x4ecfe0(_0x1b9682, _0x40cbc4) {
    const _0x419569 = await _0x1b9682.formData();
    if (_0x419569) {
        return a0_0x5a75f3(_0x419569, _0x40cbc4);
    }
    return {};
}
function a0_0x5a75f3(_0x53cd41, _0x22c327) {
    const _0x276140 = {};
    _0x53cd41.forEach((_0x4d156a, _0x4638a0) => {
        const _0x1a6f6f = _0x22c327.all || _0x4638a0.endsWith('[]');
        if (!_0x1a6f6f) {
            _0x276140[_0x4638a0] = _0x4d156a;
        } else {
            a0_0x44eb43(_0x276140, _0x4638a0, _0x4d156a);
        }
    });
    return _0x276140;
}
var a0_0x44eb43 = (_0x12ac25, _0x5c9627, _0x35aa3c) => {
    if (_0x12ac25[_0x5c9627] && a0_0x462e37(_0x12ac25[_0x5c9627])) {
        a0_0x1bf449(_0x12ac25[_0x5c9627], _0x35aa3c);
    } else {
        if (_0x12ac25[_0x5c9627]) {
            a0_0x6d1270(_0x12ac25, _0x5c9627, _0x35aa3c);
        } else {
            _0x12ac25[_0x5c9627] = _0x35aa3c;
        }
    }
};
function a0_0x462e37(_0x347877) {
    return Array.isArray(_0x347877);
}
var a0_0x1bf449 = (_0x4f6beb, _0x17aea4) => {
    _0x4f6beb.push(_0x17aea4);
};
var a0_0x6d1270 = (_0x576f00, _0x51a779, _0x40d499) => {
    _0x576f00[_0x51a779] = [_0x576f00[_0x51a779], _0x40d499];
};
var a0_0x4480fe = _0x4fd0d9 => {
    const _0xf9f924 = _0x4fd0d9.split('/');
    if (_0xf9f924[0x0] === '') {
        _0xf9f924.shift();
    }
    return _0xf9f924;
};
var a0_0x318d19 = _0x1775f4 => {
    const {
        groups: _0x428d28,
        path: _0x186984
    } = a0_0x5206c5(_0x1775f4);
    const _0x172e3c = a0_0x4480fe(_0x186984);
    return a0_0x3769df(_0x172e3c, _0x428d28);
};
var a0_0x5206c5 = _0xb33c57 => {
    const _0x12cbe6 = [];
    _0xb33c57 = _0xb33c57.replace(/\{[^}]+\}/g, (_0x547ecc, _0x50b01c) => {
        const _0x58ae32 = '@' + _0x50b01c;
        _0x12cbe6.push([_0x58ae32, _0x547ecc]);
        return _0x58ae32;
    });
    return {
        'groups': _0x12cbe6,
        'path': _0xb33c57
    };
};
var a0_0x3769df = (_0x65155f, _0x2c812d) => {
    for (let _0x1b772e = _0x2c812d.length - 0x1; _0x1b772e >= 0x0; _0x1b772e--) {
        const [_0x3d81d8] = _0x2c812d[_0x1b772e];
        for (let _0x2e4016 = _0x65155f.length - 0x1; _0x2e4016 >= 0x0; _0x2e4016--) {
            if (_0x65155f[_0x2e4016].includes(_0x3d81d8)) {
                _0x65155f[_0x2e4016] = _0x65155f[_0x2e4016].replace(_0x3d81d8, _0x2c812d[_0x1b772e][0x1]);
                break;
            }
        }
    }
    return _0x65155f;
};
var a0_0x286115 = {};
var a0_0x2bb730 = _0x41dee8 => {
    if (_0x41dee8 === '*') {
        return '*';
    }
    const _0x1a56c9 = _0x41dee8.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    if (_0x1a56c9) {
        if (!a0_0x286115[_0x41dee8]) {
            if (_0x1a56c9[0x2]) {
                a0_0x286115[_0x41dee8] = [_0x41dee8, _0x1a56c9[0x1], new RegExp('^' + _0x1a56c9[0x2] + '$')];
            } else {
                a0_0x286115[_0x41dee8] = [_0x41dee8, _0x1a56c9[0x1], true];
            }
        }
        return a0_0x286115[_0x41dee8];
    }
    return null;
};
var a0_0x3d5913 = _0x1ba8d2 => {
    const _0x3a4a7c = _0x1ba8d2.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
    return _0x3a4a7c ? _0x3a4a7c[0x1] : '';
};
var a0_0x2a26ee = _0x1fc4c2 => {
    const _0x26a13c = _0x1fc4c2.indexOf('?', 0x8);
    return _0x26a13c === -0x1 ? '' : '?' + _0x1fc4c2.slice(_0x26a13c + 0x1);
};
var a0_0xcad194 = _0x4046c1 => {
    const _0x4283cd = a0_0x3d5913(_0x4046c1);
    return _0x4283cd.length > 0x1 && _0x4283cd[_0x4283cd.length - 0x1] === '/' ? _0x4283cd.slice(0x0, -0x1) : _0x4283cd;
};
var a0_0x25298e = (..._0x125dbb) => {
    let _0x2266eb = '';
    let _0x531b9e = false;
    for (let _0x4388f3 of _0x125dbb) {
        if (_0x2266eb[_0x2266eb.length - 0x1] === '/') {
            _0x2266eb = _0x2266eb.slice(0x0, -0x1);
            _0x531b9e = true;
        }
        if (_0x4388f3[0x0] !== '/') {
            _0x4388f3 = '/' + _0x4388f3;
        }
        if (_0x4388f3 === '/' && _0x531b9e) {
            _0x2266eb = _0x2266eb + '/';
        } else if (_0x4388f3 !== '/') {
            _0x2266eb = '' + _0x2266eb + _0x4388f3;
        }
        if (_0x4388f3 === '/' && _0x2266eb === '') {
            _0x2266eb = '/';
        }
    }
    return _0x2266eb;
};
var a0_0x497c9e = _0x3ba206 => {
    if (!_0x3ba206.match(/\:.+\?$/)) {
        return null;
    }
    const _0x2e3a20 = _0x3ba206.split('/');
    const _0x426a61 = [];
    let _0x33c30e = '';
    _0x2e3a20.forEach(_0x34f1ab => {
        if (_0x34f1ab !== '' && !/\:/.test(_0x34f1ab)) {
            _0x33c30e += '/' + _0x34f1ab;
        } else {
            if (/\:/.test(_0x34f1ab)) {
                if (/\?/.test(_0x34f1ab)) {
                    if (_0x426a61.length === 0x0 && _0x33c30e === '') {
                        _0x426a61.push('/');
                    } else {
                        _0x426a61.push(_0x33c30e);
                    }
                    const _0x150e1b = _0x34f1ab.replace('?', '');
                    _0x33c30e += '/' + _0x150e1b;
                    _0x426a61.push(_0x33c30e);
                } else {
                    _0x33c30e += '/' + _0x34f1ab;
                }
            }
        }
    });
    return _0x426a61.filter((_0x1e8745, _0x50d7cb, _0x205d74) => _0x205d74.indexOf(_0x1e8745) === _0x50d7cb);
};
var a0_0x2c4951 = _0x1ba762 => {
    if (!/[%+]/.test(_0x1ba762)) {
        return _0x1ba762;
    }
    if (_0x1ba762.indexOf('+') !== -0x1) {
        _0x1ba762 = _0x1ba762.replace(/\+/g, " ");
    }
    return /%/.test(_0x1ba762) ? decodeURIComponent(_0x1ba762) : _0x1ba762;
};
var a0_0x4fdc82 = (_0x396c8c, _0x2fe307, _0x2679d0) => {
    let _0x4715b7;
    if (!_0x2679d0 && _0x2fe307 && !/[%+]/.test(_0x2fe307)) {
        let _0x3e2f79 = _0x396c8c.indexOf('?' + _0x2fe307, 0x8);
        if (_0x3e2f79 === -0x1) {
            _0x3e2f79 = _0x396c8c.indexOf('&' + _0x2fe307, 0x8);
        }
        while (_0x3e2f79 !== -0x1) {
            const _0x4c9418 = _0x396c8c.charCodeAt(_0x3e2f79 + _0x2fe307.length + 0x1);
            if (_0x4c9418 === 0x3d) {
                const _0x462015 = _0x3e2f79 + _0x2fe307.length + 0x2;
                const _0x7d1284 = _0x396c8c.indexOf('&', _0x462015);
                return a0_0x2c4951(_0x396c8c.slice(_0x462015, _0x7d1284 === -0x1 ? undefined : _0x7d1284));
            } else {
                if (_0x4c9418 == 0x26 || isNaN(_0x4c9418)) {
                    return '';
                }
            }
            _0x3e2f79 = _0x396c8c.indexOf('&' + _0x2fe307, _0x3e2f79 + 0x1);
        }
        _0x4715b7 = /[%+]/.test(_0x396c8c);
        if (!_0x4715b7) {
            return undefined;
        }
    }
    const _0x44b7f7 = {};
    _0x4715b7 ?? (_0x4715b7 = /[%+]/.test(_0x396c8c));
    let _0x45277f = _0x396c8c.indexOf('?', 0x8);
    while (_0x45277f !== -0x1) {
        const _0x7d40a5 = _0x396c8c.indexOf('&', _0x45277f + 0x1);
        let _0x10824a = _0x396c8c.indexOf('=', _0x45277f);
        if (_0x10824a > _0x7d40a5 && _0x7d40a5 !== -0x1) {
            _0x10824a = -0x1;
        }
        let _0x35e4e8 = _0x396c8c.slice(_0x45277f + 0x1, _0x10824a === -0x1 ? _0x7d40a5 === -0x1 ? undefined : _0x7d40a5 : _0x10824a);
        if (_0x4715b7) {
            _0x35e4e8 = a0_0x2c4951(_0x35e4e8);
        }
        _0x45277f = _0x7d40a5;
        if (_0x35e4e8 === '') {
            continue;
        }
        let _0x86ac1c;
        if (_0x10824a === -0x1) {
            _0x86ac1c = '';
        } else {
            _0x86ac1c = _0x396c8c.slice(_0x10824a + 0x1, _0x7d40a5 === -0x1 ? undefined : _0x7d40a5);
            if (_0x4715b7) {
                _0x86ac1c = a0_0x2c4951(_0x86ac1c);
            }
        }
        if (_0x2679d0) {
            if (!(_0x44b7f7[_0x35e4e8] && Array.isArray(_0x44b7f7[_0x35e4e8]))) {
                _0x44b7f7[_0x35e4e8] = [];
            }
            ;
            _0x44b7f7[_0x35e4e8].push(_0x86ac1c);
        } else {
            _0x44b7f7[_0x35e4e8] ?? (_0x44b7f7[_0x35e4e8] = _0x86ac1c);
        }
    }
    return _0x2fe307 ? _0x44b7f7[_0x2fe307] : _0x44b7f7;
};
var a0_0xa60511 = (_0x29ca03, _0x187f36) => {
    return a0_0x4fdc82(_0x29ca03, _0x187f36, true);
};
var a0_0x508f81 = (_0xbfdba5, _0x3a6ed7, _0x96e67e) => {
    if (!_0x3a6ed7.has(_0xbfdba5)) {
        throw TypeError("Cannot " + _0x96e67e);
    }
};
var a0_0xa66f8d = (_0x4e3fbe, _0x4b32d7, _0x37dad2) => {
    a0_0x508f81(_0x4e3fbe, _0x4b32d7, "read from private field");
    return _0x37dad2 ? _0x37dad2.call(_0x4e3fbe) : _0x4b32d7.get(_0x4e3fbe);
};
var a0_0xb2c039 = (_0xd93961, _0x5d1781, _0x1b1e60) => {
    if (_0x5d1781.has(_0xd93961)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x5d1781 instanceof WeakSet) {
        _0x5d1781.add(_0xd93961);
    } else {
        _0x5d1781.set(_0xd93961, _0x1b1e60);
    }
};
var a0_0x3b64cf = (_0x1841b5, _0x1c95e6, _0x829933, _0x185175) => {
    a0_0x508f81(_0x1841b5, _0x1c95e6, "write to private field");
    if (_0x185175) {
        _0x185175.call(_0x1841b5, _0x829933);
    } else {
        _0x1c95e6.set(_0x1841b5, _0x829933);
    }
    return _0x829933;
};
var a0_0xccce00;
var a0_0x3644b6;
var a0_0x3de4a3 = class {
    constructor(_0x2cf66d, _0x34f3f1 = '/', _0x2ea4c2 = [[]]) {
        a0_0xb2c039(this, a0_0xccce00, undefined);
        a0_0xb2c039(this, a0_0x3644b6, undefined);
        this.routeIndex = 0x0;
        this.bodyCache = {};
        this.cachedBody = _0xff3ad2 => {
            const {
                bodyCache: _0x572c9d,
                raw: _0x1ddc79
            } = this;
            const _0x3e462a = _0x572c9d[_0xff3ad2];
            if (_0x3e462a) {
                return _0x3e462a;
            }
            if (_0x572c9d.arrayBuffer) {
                return (async () => {
                    return await new Response(_0x572c9d.arrayBuffer)[_0xff3ad2]();
                })();
            }
            return _0x572c9d[_0xff3ad2] = _0x1ddc79[_0xff3ad2]();
        };
        this.raw = _0x2cf66d;
        this.path = _0x34f3f1;
        a0_0x3b64cf(this, a0_0x3644b6, _0x2ea4c2);
        a0_0x3b64cf(this, a0_0xccce00, {});
    }
    ["param"](_0x2bf824) {
        return _0x2bf824 ? this.getDecodedParam(_0x2bf824) : this.getAllDecodedParams();
    }
    ["getDecodedParam"](_0x1cec07) {
        const _0x15c648 = a0_0xa66f8d(this, a0_0x3644b6)[0x0][this.routeIndex][0x1][_0x1cec07];
        const _0x384f69 = this.getParamValue(_0x15c648);
        return _0x384f69 ? /\%/.test(_0x384f69) ? decodeURIComponent(_0x384f69) : _0x384f69 : undefined;
    }
    ['getAllDecodedParams']() {
        const _0x124d51 = {};
        const _0x2119e8 = Object.keys(a0_0xa66f8d(this, a0_0x3644b6)[0x0][this.routeIndex][0x1]);
        for (const _0x2e6d83 of _0x2119e8) {
            const _0x1be744 = this.getParamValue(a0_0xa66f8d(this, a0_0x3644b6)[0x0][this.routeIndex][0x1][_0x2e6d83]);
            if (_0x1be744 && typeof _0x1be744 === 'string') {
                _0x124d51[_0x2e6d83] = /\%/.test(_0x1be744) ? decodeURIComponent(_0x1be744) : _0x1be744;
            }
        }
        return _0x124d51;
    }
    ['getParamValue'](_0x577b99) {
        return a0_0xa66f8d(this, a0_0x3644b6)[0x1] ? a0_0xa66f8d(this, a0_0x3644b6)[0x1][_0x577b99] : _0x577b99;
    }
    ["query"](_0x387955) {
        return a0_0x4fdc82(this.url, _0x387955);
    }
    ['queries'](_0x55bafb) {
        return a0_0x4fdc82(this.url, _0x55bafb, true);
    }
    ["header"](_0x220375) {
        if (_0x220375) {
            return this.raw.headers.get(_0x220375.toLowerCase()) ?? undefined;
        }
        const _0x1ed308 = {};
        this.raw.headers.forEach((_0x1e6fb0, _0x5486c5) => {
            _0x1ed308[_0x5486c5] = _0x1e6fb0;
        });
        return _0x1ed308;
    }
    async ["parseBody"](_0x360f68) {
        if (this.bodyCache.parsedBody) {
            return this.bodyCache.parsedBody;
        }
        const _0x1c43f1 = await a0_0x5dd5c5(this, _0x360f68);
        this.bodyCache.parsedBody = _0x1c43f1;
        return _0x1c43f1;
    }
    ["json"]() {
        return this.cachedBody("json");
    }
    ["text"]() {
        return this.cachedBody('text');
    }
    ["arrayBuffer"]() {
        return this.cachedBody("arrayBuffer");
    }
    ["blob"]() {
        return this.cachedBody("blob");
    }
    ["formData"]() {
        return this.cachedBody("formData");
    }
    ["addValidatedData"](_0x353d11, _0x10b2da) {
        a0_0xa66f8d(this, a0_0xccce00)[_0x353d11] = _0x10b2da;
    }
    ["valid"](_0x269552) {
        return a0_0xa66f8d(this, a0_0xccce00)[_0x269552];
    }
    get ['url']() {
        return this.raw.url;
    }
    get ['method']() {
        return this.raw.method;
    }
    get ["matchedRoutes"]() {
        return a0_0xa66f8d(this, a0_0x3644b6)[0x0].map(([[, _0x1e1808]]) => _0x1e1808);
    }
    get ['routePath']() {
        return a0_0xa66f8d(this, a0_0x3644b6)[0x0].map(([[, _0x150591]]) => _0x150591)[this.routeIndex].path;
    }
};
a0_0xccce00 = new WeakMap();
a0_0x3644b6 = new WeakMap();
var a0_0x228c5c = ['get', 'post', "put", "delete", 'options', "patch"];
var a0_0x565f6c = class extends Error { };
var a0_0x4a05a2 = (_0x35b38e, _0x6291f7, _0x90e002) => {
    if (!_0x6291f7.has(_0x35b38e)) {
        throw TypeError("Cannot " + _0x90e002);
    }
};
var a0_0x35c4d9 = (_0x210088, _0x26aba0, _0x89e56b) => {
    a0_0x4a05a2(_0x210088, _0x26aba0, "read from private field");
    return _0x89e56b ? _0x89e56b.call(_0x210088) : _0x26aba0.get(_0x210088);
};
var a0_0xa92e5 = (_0x39bad6, _0x4d618a, _0x507e40) => {
    if (_0x4d618a.has(_0x39bad6)) {
        throw TypeError("Cannot add the same private member more than once");
    }
    if (_0x4d618a instanceof WeakSet) {
        _0x4d618a.add(_0x39bad6);
    } else {
        _0x4d618a.set(_0x39bad6, _0x507e40);
    }
};
var a0_0x4f406e = (_0x37e1e4, _0x92458, _0x3186a9, _0x587172) => {
    a0_0x4a05a2(_0x37e1e4, _0x92458, "write to private field");
    if (_0x587172) {
        _0x587172.call(_0x37e1e4, _0x3186a9);
    } else {
        _0x92458.set(_0x37e1e4, _0x3186a9);
    }
    return _0x3186a9;
};
var a0_0x2cca0f = Symbol("composedHandler");
function a0_0x5ea639() {
    return class { };
}
var a0_0x298258 = _0x2cadc0 => {
    return _0x2cadc0.text("404 Not Found", 0x194);
};
var a0_0x1be795 = (_0x32cf3e, _0x4b100d) => {
    if (_0x32cf3e instanceof a0_0xe2f2d3) {
        return _0x32cf3e.getResponse();
    }
    console.error(_0x32cf3e);
    return _0x4b100d.text("Internal Server Error", 0x1f4);
};
var a0_0x480316;
var a0_0x4a74cb = class extends class { } {
    constructor(_0x240e08 = {}) {
        super();
        this._basePath = '/';
        a0_0xa92e5(this, a0_0x480316, '/');
        this.routes = [];
        this.notFoundHandler = a0_0x298258;
        this.errorHandler = a0_0x1be795;
        this.onError = _0x1943f9 => {
            this.errorHandler = _0x1943f9;
            return this;
        };
        this.notFound = _0x487f59 => {
            this.notFoundHandler = _0x487f59;
            return this;
        };
        this.fetch = (_0x317cee, _0x43ff86, _0x61cbe1) => {
            return this.dispatch(_0x317cee, _0x61cbe1, _0x43ff86, _0x317cee.method);
        };
        this.request = (_0xa93dc3, _0x42ba95, _0x1507e7, _0x1a3231) => {
            if (_0xa93dc3 instanceof Request) {
                if (_0x42ba95 !== undefined) {
                    _0xa93dc3 = new Request(_0xa93dc3, _0x42ba95);
                }
                return this.fetch(_0xa93dc3, _0x1507e7, _0x1a3231);
            }
            _0xa93dc3 = _0xa93dc3.toString();
            const _0x16d694 = /^https?:\/\//.test(_0xa93dc3) ? _0xa93dc3 : "http://localhost" + a0_0x25298e('/', _0xa93dc3);
            const _0x50c2a3 = new Request(_0x16d694, _0x42ba95);
            return this.fetch(_0x50c2a3, _0x1507e7, _0x1a3231);
        };
        this.fire = () => {
            addEventListener("fetch", _0x2aa869 => {
                _0x2aa869.respondWith(this.dispatch(_0x2aa869.request, _0x2aa869, undefined, _0x2aa869.request.method));
            });
        };
        const _0x11f00b = [...a0_0x228c5c, 'all'];
        _0x11f00b.map(_0x1a2df1 => {
            this[_0x1a2df1] = (_0x37556e, ..._0x2a811a) => {
                if (typeof _0x37556e === 'string') {
                    a0_0x4f406e(this, a0_0x480316, _0x37556e);
                } else {
                    this.addRoute(_0x1a2df1, a0_0x35c4d9(this, a0_0x480316), _0x37556e);
                }
                _0x2a811a.map(_0x1b3969 => {
                    if (typeof _0x1b3969 !== 'string') {
                        this.addRoute(_0x1a2df1, a0_0x35c4d9(this, a0_0x480316), _0x1b3969);
                    }
                });
                return this;
            };
        });
        this.on = (_0x50d72b, _0x53d9f5, ..._0x160379) => {
            if (!_0x50d72b) {
                return this;
            }
            for (const _0x23198b of [_0x53d9f5].flat()) {
                a0_0x4f406e(this, a0_0x480316, _0x23198b);
                for (const _0x1b4d23 of [_0x50d72b].flat()) {
                    _0x160379.map(_0x4badb9 => {
                        this.addRoute(_0x1b4d23.toUpperCase(), a0_0x35c4d9(this, a0_0x480316), _0x4badb9);
                    });
                }
            }
            return this;
        };
        this.use = (_0x3bb815, ..._0x26d2f1) => {
            if (typeof _0x3bb815 === 'string') {
                a0_0x4f406e(this, a0_0x480316, _0x3bb815);
            } else {
                a0_0x4f406e(this, a0_0x480316, '*');
                _0x26d2f1.unshift(_0x3bb815);
            }
            _0x26d2f1.map(_0x32501f => {
                this.addRoute("ALL", a0_0x35c4d9(this, a0_0x480316), _0x32501f);
            });
            return this;
        };
        const _0x3ed972 = _0x240e08.strict ?? true;
        delete _0x240e08.strict;
        Object.assign(this, _0x240e08);
        this.getPath = _0x3ed972 ? _0x240e08.getPath ?? a0_0x3d5913 : a0_0xcad194;
    }
    ['clone']() {
        const _0x5a5be0 = new a0_0x4a74cb({
            'router': this.router,
            'getPath': this.getPath
        });
        _0x5a5be0.routes = this.routes;
        return _0x5a5be0;
    }
    ["route"](_0x3ec124, _0x46d807) {
        const _0x2bb8ce = this.basePath(_0x3ec124);
        if (!_0x46d807) {
            return _0x2bb8ce;
        }
        _0x46d807.routes.map(_0x317aa6 => {
            let _0x1645ad;
            if (_0x46d807.errorHandler === a0_0x1be795) {
                _0x1645ad = _0x317aa6.handler;
            } else {
                _0x1645ad = async (_0x48eb24, _0xeeb773) => (await a0_0xe20713([], _0x46d807.errorHandler)(_0x48eb24, () => _0x317aa6.handler(_0x48eb24, _0xeeb773))).res;
                _0x1645ad[a0_0x2cca0f] = _0x317aa6.handler;
            }
            _0x2bb8ce.addRoute(_0x317aa6.method, _0x317aa6.path, _0x1645ad);
        });
        return this;
    }
    ['basePath'](_0x2dbf11) {
        const _0x5af450 = this.clone();
        _0x5af450._basePath = a0_0x25298e(this._basePath, _0x2dbf11);
        return _0x5af450;
    }
    ["mount"](_0x538212, _0x44ffcf, _0x20df79) {
        const _0x4b02a0 = {
            'AsTPL': function (_0x45a9f5, _0x497f8c) {
                return _0x45a9f5(_0x497f8c);
            },
            'oHaOf': function (_0x41c155, _0x38014d, ..._0x38cf79) {
                return _0x41c155(_0x38014d, ..._0x38cf79);
            },
            'BQJLy': function (_0x35af49, _0x478892) {
                return _0x35af49 === _0x478892;
            },
            'aYWdE': function (_0x288f2b, _0x222b58, _0x5155c0) {
                return _0x288f2b(_0x222b58, _0x5155c0);
            }
        };
        const _0x19ea36 = _0x4b02a0.oHaOf(a0_0x25298e, this._basePath, _0x538212);
        const _0x36a654 = _0x19ea36 === '/' ? 0x0 : _0x19ea36.length;
        const _0x428df5 = async (_0x589d0a, _0x44b41a) => {
            let _0x3a168e = undefined;
            try {
                _0x3a168e = _0x589d0a.executionCtx;
            } catch { }
            const _0x14942a = _0x20df79 ? _0x20df79(_0x589d0a) : [_0x589d0a.env, _0x3a168e];
            const _0xb97d2d = Array.isArray(_0x14942a) ? _0x14942a : [_0x14942a];
            const _0x2384c4 = a0_0x2a26ee(_0x589d0a.req.url);
            const _0x2b1b64 = await _0x4b02a0.oHaOf(_0x44ffcf, new Request(new URL((_0x589d0a.req.path.slice(_0x36a654) || '/') + _0x2384c4, _0x589d0a.req.url), _0x589d0a.req.raw), ..._0xb97d2d);
            if (_0x2b1b64) {
                return _0x2b1b64;
            }
            await _0x44b41a();
        };
        this.addRoute("ALL", a0_0x25298e(_0x538212, '*'), _0x428df5);
        return this;
    }
    ['addRoute'](_0x30c45e, _0x11160f, _0x378a96) {
        _0x30c45e = _0x30c45e.toUpperCase();
        _0x11160f = a0_0x25298e(this._basePath, _0x11160f);
        const _0x4a3a25 = {
            'path': _0x11160f,
            'method': _0x30c45e,
            'handler': _0x378a96
        };
        this.router.add(_0x30c45e, _0x11160f, [_0x378a96, _0x4a3a25]);
        this.routes.push(_0x4a3a25);
    }
    ['matchRoute'](_0x371882, _0x4480d9) {
        return this.router.match(_0x371882, _0x4480d9);
    }
    ['handleError'](_0x21a619, _0xf18009) {
        if (_0x21a619 instanceof Error) {
            return this.errorHandler(_0x21a619, _0xf18009);
        }
        throw _0x21a619;
    }
    ['dispatch'](_0x4cd952, _0x4505d1, _0x20c92d, _0x2edf0b) {
        if (_0x2edf0b === "HEAD") {
            return (async () => new Response(null, await this.dispatch(_0x4cd952, _0x4505d1, _0x20c92d, 'GET')))();
        }
        const _0xe408f0 = this.getPath(_0x4cd952, {
            'env': _0x20c92d
        });
        const _0xfcb7ba = this.matchRoute(_0x2edf0b, _0xe408f0);
        const _0x483f7b = new a0_0x32cd3e(new a0_0x3de4a3(_0x4cd952, _0xe408f0, _0xfcb7ba), {
            'env': _0x20c92d,
            'executionCtx': _0x4505d1,
            'notFoundHandler': this.notFoundHandler
        });
        if (_0xfcb7ba[0x0].length === 0x1) {
            let _0x35689b;
            try {
                _0x35689b = _0xfcb7ba[0x0][0x0][0x0][0x0](_0x483f7b, async () => {
                    _0x483f7b.res = await this.notFoundHandler(_0x483f7b);
                });
            } catch (_0x1f937a) {
                return this.handleError(_0x1f937a, _0x483f7b);
            }
            return _0x35689b instanceof Promise ? _0x35689b.then(_0x480db2 => _0x480db2 || (_0x483f7b.finalized ? _0x483f7b.res : this.notFoundHandler(_0x483f7b)))["catch"](_0xde1136 => this.handleError(_0xde1136, _0x483f7b)) : _0x35689b;
        }
        const _0x497226 = a0_0xe20713(_0xfcb7ba[0x0], this.errorHandler, this.notFoundHandler);
        return (async () => {
            try {
                const _0x2a3a7c = await _0x497226(_0x483f7b);
                if (!_0x2a3a7c.finalized) {
                    throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");
                }
                return _0x2a3a7c.res;
            } catch (_0x5897ee) {
                return this.handleError(_0x5897ee, _0x483f7b);
            }
        })();
    }
};
a0_0x480316 = new WeakMap();
var a0_0x43f011 = Symbol();
function a0_0x1992d4(_0x75acb3, _0x9a48fb) {
    if (_0x75acb3.length === 0x1) {
        return _0x9a48fb.length === 0x1 ? _0x75acb3 < _0x9a48fb ? -0x1 : 0x1 : -0x1;
    }
    if (_0x9a48fb.length === 0x1) {
        return 0x1;
    }
    if (_0x75acb3 === '.*' || _0x75acb3 === "(?:|/.*)") {
        return 0x1;
    } else {
        if (_0x9a48fb === '.*' || _0x9a48fb === "(?:|/.*)") {
            return -0x1;
        }
    }
    if (_0x75acb3 === "[^/]+") {
        return 0x1;
    } else {
        if (_0x9a48fb === "[^/]+") {
            return -0x1;
        }
    }
    return _0x75acb3.length === _0x9a48fb.length ? _0x75acb3 < _0x9a48fb ? -0x1 : 0x1 : _0x9a48fb.length - _0x75acb3.length;
}
var a0_0x51158f = class {
    constructor() {
        this.children = {};
    }
    ["insert"](_0x3b3907, _0x210106, _0x28ad85, _0x394ed1, _0xad8742) {
        if (_0x3b3907.length === 0x0) {
            if (this.index !== undefined) {
                throw a0_0x43f011;
            }
            if (_0xad8742) {
                return;
            }
            this.index = _0x210106;
            return;
        }
        const [_0x424b09, ..._0x4fa8ab] = _0x3b3907;
        const _0x2d77ac = _0x424b09 === '*' ? _0x4fa8ab.length === 0x0 ? ['', '', '.*'] : ['', '', "[^/]+"] : _0x424b09 === '/*' ? ['', '', "(?:|/.*)"] : _0x424b09.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
        let _0x27c4d8;
        if (_0x2d77ac) {
            const _0x54bc9b = _0x2d77ac[0x1];
            let _0x2e9163 = _0x2d77ac[0x2] || "[^/]+";
            if (_0x54bc9b && _0x2d77ac[0x2]) {
                _0x2e9163 = _0x2e9163.replace(/^\((?!\?:)(?=[^)]+\)$)/, '(?:');
                if (/\((?!\?:)/.test(_0x2e9163)) {
                    throw a0_0x43f011;
                }
            }
            _0x27c4d8 = this.children[_0x2e9163];
            if (!_0x27c4d8) {
                if (Object.keys(this.children).some(_0x3055c0 => _0x3055c0 !== '.*' && _0x3055c0 !== "(?:|/.*)")) {
                    throw a0_0x43f011;
                }
                if (_0xad8742) {
                    return;
                }
                _0x27c4d8 = this.children[_0x2e9163] = new a0_0x51158f();
                if (_0x54bc9b !== '') {
                    _0x27c4d8.varIndex = _0x394ed1.varIndex++;
                }
            }
            if (!_0xad8742 && _0x54bc9b !== '') {
                _0x28ad85.push([_0x54bc9b, _0x27c4d8.varIndex]);
            }
        } else {
            _0x27c4d8 = this.children[_0x424b09];
            if (!_0x27c4d8) {
                if (Object.keys(this.children).some(_0x13dcc1 => _0x13dcc1.length > 0x1 && _0x13dcc1 !== '.*' && _0x13dcc1 !== "(?:|/.*)")) {
                    throw a0_0x43f011;
                }
                if (_0xad8742) {
                    return;
                }
                _0x27c4d8 = this.children[_0x424b09] = new a0_0x51158f();
            }
        }
        _0x27c4d8.insert(_0x4fa8ab, _0x210106, _0x28ad85, _0x394ed1, _0xad8742);
    }
    ["buildRegExpStr"]() {
        const _0x5e43e1 = Object.keys(this.children).sort(a0_0x1992d4);
        const _0x3b1b8b = _0x5e43e1.map(_0x2891d8 => {
            const _0x5584dd = this.children[_0x2891d8];
            return (typeof _0x5584dd.varIndex === 'number' ? '(' + _0x2891d8 + ')@' + _0x5584dd.varIndex : _0x2891d8) + _0x5584dd.buildRegExpStr();
        });
        if (typeof this.index === "number") {
            _0x3b1b8b.unshift('#' + this.index);
        }
        if (_0x3b1b8b.length === 0x0) {
            return '';
        }
        if (_0x3b1b8b.length === 0x1) {
            return _0x3b1b8b[0x0];
        }
        return "(?:" + _0x3b1b8b.join('|') + ')';
    }
};
var a0_0xdf23d5 = class {
    constructor() {
        this.context = {
            'varIndex': 0x0
        };
        this.root = new a0_0x51158f();
    }
    ["insert"](_0x5d20ea, _0x3776a8, _0xe85c7b) {
        const _0x148279 = [];
        const _0x3cdc51 = [];
        for (let _0x1d019a = 0x0; ;) {
            let _0x1cce7f = false;
            _0x5d20ea = _0x5d20ea.replace(/\{[^}]+\}/g, _0x3d17f2 => {
                const _0x488593 = "@\\" + _0x1d019a;
                _0x3cdc51[_0x1d019a] = [_0x488593, _0x3d17f2];
                _0x1d019a++;
                _0x1cce7f = true;
                return _0x488593;
            });
            if (!_0x1cce7f) {
                break;
            }
        }
        const _0x21c99b = _0x5d20ea.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
        for (let _0x28f199 = _0x3cdc51.length - 0x1; _0x28f199 >= 0x0; _0x28f199--) {
            const [_0x228f59] = _0x3cdc51[_0x28f199];
            for (let _0x50f482 = _0x21c99b.length - 0x1; _0x50f482 >= 0x0; _0x50f482--) {
                if (_0x21c99b[_0x50f482].indexOf(_0x228f59) !== -0x1) {
                    _0x21c99b[_0x50f482] = _0x21c99b[_0x50f482].replace(_0x228f59, _0x3cdc51[_0x28f199][0x1]);
                    break;
                }
            }
        }
        this.root.insert(_0x21c99b, _0x3776a8, _0x148279, this.context, _0xe85c7b);
        return _0x148279;
    }
    ["buildRegExp"]() {
        let _0x288dc0 = this.root.buildRegExpStr();
        if (_0x288dc0 === '') {
            return [/^$/, [], []];
        }
        let _0x5287c1 = 0x0;
        const _0x509f20 = [];
        const _0x4754e4 = [];
        _0x288dc0 = _0x288dc0.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_0x191749, _0x38e77e, _0x1baf2a) => {
            if (typeof _0x38e77e !== 'undefined') {
                _0x509f20[++_0x5287c1] = Number(_0x38e77e);
                return "$()";
            }
            if (typeof _0x1baf2a !== "undefined") {
                _0x4754e4[Number(_0x1baf2a)] = ++_0x5287c1;
                return '';
            }
            return '';
        });
        return [new RegExp('^' + _0x288dc0), _0x509f20, _0x4754e4];
    }
};
var a0_0x5a202a = ["ALL", ...a0_0x228c5c].map(_0x31a9a3 => _0x31a9a3.toUpperCase());
var a0_0x507e3a = [];
var a0_0x4f7649 = [/^$/, [], {}];
var a0_0x575791 = {};
function a0_0x189056(_0x395809) {
    return a0_0x575791[_0x395809] ?? (a0_0x575791[_0x395809] = new RegExp(_0x395809 === '*' ? '' : '^' + _0x395809.replace(/\/\*/, "(?:|/.*)") + '$'));
}
function a0_0x157745() {
    a0_0x575791 = {};
}
function a0_0x5ffaa7(_0x4bc3e9) {
    const _0x39c19c = new a0_0xdf23d5();
    const _0x3c9dce = [];
    if (_0x4bc3e9.length === 0x0) {
        return a0_0x4f7649;
    }
    const _0x3a87cc = _0x4bc3e9.map(_0x275ce8 => [!/\*|\/:/.test(_0x275ce8[0x0]), ..._0x275ce8]).sort(([_0x393f82, _0x464d1b], [_0x489589, _0x1a5660]) => _0x393f82 ? 0x1 : _0x489589 ? -0x1 : _0x464d1b.length - _0x1a5660.length);
    const _0x3bbe8e = {};
    let _0x3dd7bb = 0x0;
    let _0x70887f = -0x1;
    for (let _0x203b5a = _0x3a87cc.length; _0x3dd7bb < _0x203b5a; _0x3dd7bb++) {
        const [_0x23425a, _0x5c45eb, _0x1b7c54] = _0x3a87cc[_0x3dd7bb];
        if (_0x23425a) {
            _0x3bbe8e[_0x5c45eb] = [_0x1b7c54.map(([_0x46f81e]) => [_0x46f81e, {}]), a0_0x507e3a];
        } else {
            _0x70887f++;
        }
        let _0x2c54dc;
        try {
            _0x2c54dc = _0x39c19c.insert(_0x5c45eb, _0x70887f, _0x23425a);
        } catch (_0x23fa01) {
            throw _0x23fa01 === a0_0x43f011 ? new a0_0x565f6c(_0x5c45eb) : _0x23fa01;
        }
        if (_0x23425a) {
            continue;
        }
        _0x3c9dce[_0x70887f] = _0x1b7c54.map(([_0x3e4846, _0x13bff9]) => {
            const _0x3013cb = {};
            _0x13bff9 -= 0x1;
            for (; _0x13bff9 >= 0x0; _0x13bff9--) {
                const [_0x2b6098, _0xe04b61] = _0x2c54dc[_0x13bff9];
                _0x3013cb[_0x2b6098] = _0xe04b61;
            }
            return [_0x3e4846, _0x3013cb];
        });
    }
    const [_0x320dff, _0x1f378e, _0x4c4954] = _0x39c19c.buildRegExp();
    let _0x10c500 = 0x0;
    for (let _0x4d8894 = _0x3c9dce.length; _0x10c500 < _0x4d8894; _0x10c500++) {
        let _0x51b454 = 0x0;
        for (let _0x5f0980 = _0x3c9dce[_0x10c500].length; _0x51b454 < _0x5f0980; _0x51b454++) {
            const _0x52885c = _0x3c9dce[_0x10c500][_0x51b454]?.[0x1];
            if (!_0x52885c) {
                continue;
            }
            const _0x176157 = Object.keys(_0x52885c);
            let _0x4dc9e8 = 0x0;
            for (let _0x4aeaa2 = _0x176157.length; _0x4dc9e8 < _0x4aeaa2; _0x4dc9e8++) {
                _0x52885c[_0x176157[_0x4dc9e8]] = _0x4c4954[_0x52885c[_0x176157[_0x4dc9e8]]];
            }
        }
    }
    const _0x22f982 = [];
    for (const _0x1c408f in _0x1f378e) {
        _0x22f982[_0x1c408f] = _0x3c9dce[_0x1f378e[_0x1c408f]];
    }
    return [_0x320dff, _0x22f982, _0x3bbe8e];
}
function a0_0x28c9f9(_0x2f1c93, _0x5f4c66) {
    if (!_0x2f1c93) {
        return undefined;
    }
    for (const _0x4acf17 of Object.keys(_0x2f1c93).sort((_0x5f453c, _0x171716) => _0x171716.length - _0x5f453c.length)) {
        if (a0_0x189056(_0x4acf17).test(_0x5f4c66)) {
            return [..._0x2f1c93[_0x4acf17]];
        }
    }
    return undefined;
}
var a0_0x28e6c3 = class {
    constructor() {
        this.name = "RegExpRouter";
        this.middleware = {
            ALL: {}
        };
        this.routes = {
            ALL: {}
        };
    }
    ["add"](_0x5cbd0b, _0x40f501, _0x4bf130) {
        var _0x3cb513;
        const {
            middleware: _0x58b49c,
            routes: _0x516baf
        } = this;
        if (!_0x58b49c || !_0x516baf) {
            throw new Error("Can not add a route since the matcher is already built.");
        }
        if (a0_0x5a202a.indexOf(_0x5cbd0b) === -0x1) {
            a0_0x5a202a.push(_0x5cbd0b);
        }
        if (!_0x58b49c[_0x5cbd0b]) {
            ;
            [_0x58b49c, _0x516baf].forEach(_0x4bf411 => {
                _0x4bf411[_0x5cbd0b] = {};
                Object.keys(_0x4bf411.ALL).forEach(_0x387321 => {
                    _0x4bf411[_0x5cbd0b][_0x387321] = [..._0x4bf411.ALL[_0x387321]];
                });
            });
        }
        if (_0x40f501 === '/*') {
            _0x40f501 = '*';
        }
        const _0xb5c5e7 = (_0x40f501.match(/\/:/g) || []).length;
        if (/\*$/.test(_0x40f501)) {
            const _0xfa7821 = a0_0x189056(_0x40f501);
            if (_0x5cbd0b === "ALL") {
                Object.keys(_0x58b49c).forEach(_0x3cc8c => {
                    var _0x5e9a10;
                    if (!(_0x5e9a10 = _0x58b49c[_0x3cc8c])[_0x40f501]) {
                        _0x5e9a10[_0x40f501] = a0_0x28c9f9(_0x58b49c[_0x3cc8c], _0x40f501) || a0_0x28c9f9(_0x58b49c.ALL, _0x40f501) || [];
                    }
                });
            } else if (!(_0x3cb513 = _0x58b49c[_0x5cbd0b])[_0x40f501]) {
                _0x3cb513[_0x40f501] = a0_0x28c9f9(_0x58b49c[_0x5cbd0b], _0x40f501) || a0_0x28c9f9(_0x58b49c.ALL, _0x40f501) || [];
            }
            Object.keys(_0x58b49c).forEach(_0x5356c4 => {
                if (_0x5cbd0b === "ALL" || _0x5cbd0b === _0x5356c4) {
                    Object.keys(_0x58b49c[_0x5356c4]).forEach(_0x3796cf => {
                        if (_0xfa7821.test(_0x3796cf)) {
                            _0x58b49c[_0x5356c4][_0x3796cf].push([_0x4bf130, _0xb5c5e7]);
                        }
                    });
                }
            });
            Object.keys(_0x516baf).forEach(_0x539fa7 => {
                if (_0x5cbd0b === "ALL" || _0x5cbd0b === _0x539fa7) {
                    Object.keys(_0x516baf[_0x539fa7]).forEach(_0x2501ad => _0xfa7821.test(_0x2501ad) && _0x516baf[_0x539fa7][_0x2501ad].push([_0x4bf130, _0xb5c5e7]));
                }
            });
            return;
        }
        const _0x5c4b47 = a0_0x497c9e(_0x40f501) || [_0x40f501];
        let _0x3d9d17 = 0x0;
        for (let _0x56d518 = _0x5c4b47.length; _0x3d9d17 < _0x56d518; _0x3d9d17++) {
            const _0x51584a = _0x5c4b47[_0x3d9d17];
            Object.keys(_0x516baf).forEach(_0x3e7577 => {
                var _0x13dd7b;
                if (_0x5cbd0b === "ALL" || _0x5cbd0b === _0x3e7577) {
                    if (!(_0x13dd7b = _0x516baf[_0x3e7577])[_0x51584a]) {
                        _0x13dd7b[_0x51584a] = [...(a0_0x28c9f9(_0x58b49c[_0x3e7577], _0x51584a) || a0_0x28c9f9(_0x58b49c.ALL, _0x51584a) || [])];
                    }
                    _0x516baf[_0x3e7577][_0x51584a].push([_0x4bf130, _0xb5c5e7 - _0x56d518 + _0x3d9d17 + 0x1]);
                }
            });
        }
    }
    ["match"](_0x2df4fb, _0x5ef8ff) {
        a0_0x157745();
        const _0x9f9807 = this.buildAllMatchers();
        this.match = (_0x483d3c, _0xbed8ed) => {
            const _0x334f1f = _0x9f9807[_0x483d3c];
            const _0x28e0c7 = _0x334f1f[0x2][_0xbed8ed];
            if (_0x28e0c7) {
                return _0x28e0c7;
            }
            const _0x2e4731 = _0xbed8ed.match(_0x334f1f[0x0]);
            if (!_0x2e4731) {
                return [[], a0_0x507e3a];
            }
            const _0x30c659 = _0x2e4731.indexOf('', 0x1);
            return [_0x334f1f[0x1][_0x30c659], _0x2e4731];
        };
        return this.match(_0x2df4fb, _0x5ef8ff);
    }
    ["buildAllMatchers"]() {
        const _0x5a7bb8 = {};
        a0_0x5a202a.forEach(_0x36f7ba => {
            _0x5a7bb8[_0x36f7ba] = this.buildMatcher(_0x36f7ba) || _0x5a7bb8.ALL;
        });
        this.middleware = this.routes = undefined;
        return _0x5a7bb8;
    }
    ["buildMatcher"](_0x1c55ce) {
        const _0x17258e = [];
        let _0x5d7bbf = _0x1c55ce === "ALL";
        [this.middleware, this.routes].forEach(_0x3c3340 => {
            const _0xccd0dd = _0x3c3340[_0x1c55ce] ? Object.keys(_0x3c3340[_0x1c55ce]).map(_0x1a1405 => [_0x1a1405, _0x3c3340[_0x1c55ce][_0x1a1405]]) : [];
            if (_0xccd0dd.length !== 0x0) {
                if (!_0x5d7bbf) {
                    _0x5d7bbf = true;
                }
                _0x17258e.push(..._0xccd0dd);
            } else if (_0x1c55ce !== "ALL") {
                _0x17258e.push(...Object.keys(_0x3c3340.ALL).map(_0x51723b => [_0x51723b, _0x3c3340.ALL[_0x51723b]]));
            }
        });
        if (!_0x5d7bbf) {
            return null;
        } else {
            return a0_0x5ffaa7(_0x17258e);
        }
    }
};
var a0_0x55e5d9 = class {
    constructor(_0x5c665c) {
        this.name = 'SmartRouter';
        this.routers = [];
        this.routes = [];
        Object.assign(this, _0x5c665c);
    }
    ["add"](_0x6bc4a, _0x3e152c, _0x4ac1c6) {
        if (!this.routes) {
            throw new Error("Can not add a route since the matcher is already built.");
        }
        this.routes.push([_0x6bc4a, _0x3e152c, _0x4ac1c6]);
    }
    ["match"](_0x3eeca0, _0x4c0058) {
        if (!this.routes) {
            throw new Error("Fatal error");
        }
        const {
            routers: _0x23d29e,
            routes: _0x5b515d
        } = this;
        const _0x1461b5 = _0x23d29e.length;
        let _0x5346aa = 0x0;
        let _0x2e9e9a;
        for (; _0x5346aa < _0x1461b5; _0x5346aa++) {
            const _0x718629 = _0x23d29e[_0x5346aa];
            try {
                _0x5b515d.forEach(_0x14a4e9 => {
                    _0x718629.add(..._0x14a4e9);
                });
                _0x2e9e9a = _0x718629.match(_0x3eeca0, _0x4c0058);
            } catch (_0x46f392) {
                if (_0x46f392 instanceof a0_0x565f6c) {
                    continue;
                }
                throw _0x46f392;
            }
            this.match = _0x718629.match.bind(_0x718629);
            this.routers = [_0x718629];
            this.routes = undefined;
            break;
        }
        if (_0x5346aa === _0x1461b5) {
            throw new Error("Fatal error");
        }
        this.name = "SmartRouter + " + this.activeRouter.name;
        return _0x2e9e9a;
    }
    get ["activeRouter"]() {
        if (this.routes || this.routers.length !== 0x1) {
            throw new Error("No active router has been determined yet.");
        }
        return this.routers[0x0];
    }
};
var a0_0x35ccd9 = class {
    constructor(_0x1c2dfd, _0x3e3439, _0x3c3ed6) {
        this.order = 0x0;
        this.params = {};
        this.children = _0x3c3ed6 || {};
        this.methods = [];
        this.name = '';
        if (_0x1c2dfd && _0x3e3439) {
            const _0x15a109 = {
                _0x1c2dfd: {
                    'handler': _0x3e3439,
                    'possibleKeys': [],
                    'score': 0x0,
                    'name': this.name
                }
            };
            this.methods = [_0x15a109];
        }
        this.patterns = [];
    }
    ["insert"](_0x1fd610, _0x465791, _0x1c7855) {
        this.name = _0x1fd610 + " " + _0x465791;
        this.order = ++this.order;
        let _0x5b43e0 = this;
        const _0x2b4964 = a0_0x318d19(_0x465791);
        const _0x267c39 = [];
        const _0x557996 = [];
        let _0x315c1c = 0x0;
        for (let _0x213cb0 = _0x2b4964.length; _0x315c1c < _0x213cb0; _0x315c1c++) {
            const _0x541fe1 = _0x2b4964[_0x315c1c];
            if (Object.keys(_0x5b43e0.children).includes(_0x541fe1)) {
                _0x557996.push(..._0x5b43e0.patterns);
                _0x5b43e0 = _0x5b43e0.children[_0x541fe1];
                const _0x28e074 = a0_0x2bb730(_0x541fe1);
                if (_0x28e074) {
                    _0x267c39.push(_0x28e074[0x1]);
                }
                continue;
            }
            _0x5b43e0.children[_0x541fe1] = new a0_0x35ccd9();
            const _0x5d0156 = a0_0x2bb730(_0x541fe1);
            if (_0x5d0156) {
                _0x5b43e0.patterns.push(_0x5d0156);
                _0x557996.push(..._0x5b43e0.patterns);
                _0x267c39.push(_0x5d0156[0x1]);
            }
            _0x557996.push(..._0x5b43e0.patterns);
            _0x5b43e0 = _0x5b43e0.children[_0x541fe1];
        }
        if (!_0x5b43e0.methods.length) {
            _0x5b43e0.methods = [];
        }
        const _0x80f9ff = {};
        const _0x5af8fb = {
            'handler': _0x1c7855,
            'possibleKeys': _0x267c39.filter((_0x119fca, _0x5045c5, _0x522c11) => _0x522c11.indexOf(_0x119fca) === _0x5045c5),
            'name': this.name,
            'score': this.order
        };
        _0x80f9ff[_0x1fd610] = _0x5af8fb;
        _0x5b43e0.methods.push(_0x80f9ff);
        return _0x5b43e0;
    }
    ["gHSets"](_0x5a1c8b, _0x33b27f, _0x2fd3bd, _0x11c0e3) {
        const _0x3cf1ae = [];
        let _0x355d46 = 0x0;
        for (let _0x6af065 = _0x5a1c8b.methods.length; _0x355d46 < _0x6af065; _0x355d46++) {
            const _0x19942b = _0x5a1c8b.methods[_0x355d46];
            const _0x43b437 = _0x19942b[_0x33b27f] || _0x19942b.ALL;
            const _0x1005fc = {};
            if (_0x43b437 !== undefined) {
                _0x43b437.params = {};
                _0x43b437.possibleKeys.forEach(_0x5b0a6e => {
                    const _0x15a228 = _0x1005fc[_0x43b437.name];
                    _0x43b437.params[_0x5b0a6e] = _0x11c0e3[_0x5b0a6e] && !_0x15a228 ? _0x11c0e3[_0x5b0a6e] : _0x2fd3bd[_0x5b0a6e] ?? _0x11c0e3[_0x5b0a6e];
                    _0x1005fc[_0x43b437.name] = true;
                });
                _0x3cf1ae.push(_0x43b437);
            }
        }
        return _0x3cf1ae;
    }
    ["search"](_0x18a12b, _0x24eefc) {
        const _0x571ef1 = [];
        this.params = {};
        const _0x21ea56 = this;
        let _0x3deb25 = [_0x21ea56];
        const _0xf5bdb = a0_0x4480fe(_0x24eefc);
        let _0x50a4e3 = 0x0;
        for (let _0x1a75ed = _0xf5bdb.length; _0x50a4e3 < _0x1a75ed; _0x50a4e3++) {
            const _0x2b9f25 = _0xf5bdb[_0x50a4e3];
            const _0x1b7cb0 = _0x50a4e3 === _0x1a75ed - 0x1;
            const _0x3c922d = [];
            let _0x28f905 = 0x0;
            for (let _0x33117b = _0x3deb25.length; _0x28f905 < _0x33117b; _0x28f905++) {
                const _0x100cea = _0x3deb25[_0x28f905];
                const _0xcddd0d = _0x100cea.children[_0x2b9f25];
                if (_0xcddd0d) {
                    _0xcddd0d.params = _0x100cea.params;
                    if (_0x1b7cb0 === true) {
                        if (_0xcddd0d.children['*']) {
                            _0x571ef1.push(...this.gHSets(_0xcddd0d.children['*'], _0x18a12b, _0x100cea.params, {}));
                        }
                        _0x571ef1.push(...this.gHSets(_0xcddd0d, _0x18a12b, _0x100cea.params, {}));
                    } else {
                        _0x3c922d.push(_0xcddd0d);
                    }
                }
                let _0x4010db = 0x0;
                for (let _0x1d86c0 = _0x100cea.patterns.length; _0x4010db < _0x1d86c0; _0x4010db++) {
                    const _0x4618fb = _0x100cea.patterns[_0x4010db];
                    const _0x5de660 = {
                        ..._0x100cea.params
                    };
                    if (_0x4618fb === '*') {
                        const _0xe5eacc = _0x100cea.children['*'];
                        if (_0xe5eacc) {
                            _0x571ef1.push(...this.gHSets(_0xe5eacc, _0x18a12b, _0x100cea.params, {}));
                            _0x3c922d.push(_0xe5eacc);
                        }
                        continue;
                    }
                    if (_0x2b9f25 === '') {
                        continue;
                    }
                    const [_0x501e3f, _0x1564bb, _0xc097bd] = _0x4618fb;
                    const _0x9f4c49 = _0x100cea.children[_0x501e3f];
                    const _0x445cc8 = _0xf5bdb.slice(_0x50a4e3).join('/');
                    if (_0xc097bd instanceof RegExp && _0xc097bd.test(_0x445cc8)) {
                        _0x5de660[_0x1564bb] = _0x445cc8;
                        _0x571ef1.push(...this.gHSets(_0x9f4c49, _0x18a12b, _0x100cea.params, _0x5de660));
                        continue;
                    }
                    if (_0xc097bd === true || _0xc097bd instanceof RegExp && _0xc097bd.test(_0x2b9f25)) {
                        if (typeof _0x501e3f === "string") {
                            _0x5de660[_0x1564bb] = _0x2b9f25;
                            if (_0x1b7cb0 === true) {
                                _0x571ef1.push(...this.gHSets(_0x9f4c49, _0x18a12b, _0x5de660, _0x100cea.params));
                                if (_0x9f4c49.children['*']) {
                                    _0x571ef1.push(...this.gHSets(_0x9f4c49.children['*'], _0x18a12b, _0x5de660, _0x100cea.params));
                                }
                            } else {
                                _0x9f4c49.params = _0x5de660;
                                _0x3c922d.push(_0x9f4c49);
                            }
                        }
                    }
                }
            }
            _0x3deb25 = _0x3c922d;
        }
        const _0x30f850 = _0x571ef1.sort((_0x2ecc83, _0x1dcc2d) => {
            return _0x2ecc83.score - _0x1dcc2d.score;
        });
        return [_0x30f850.map(({
            handler: _0x382496,
            params: _0x1e92ab
        }) => [_0x382496, _0x1e92ab])];
    }
};
var a0_0x3990ae = class {
    constructor() {
        this.name = 'TrieRouter';
        this.node = new a0_0x35ccd9();
    }
    ["add"](_0xfd10e6, _0x2f9604, _0x1414c0) {
        const _0x336385 = a0_0x497c9e(_0x2f9604);
        if (_0x336385) {
            for (const _0x3cdbd2 of _0x336385) {
                this.node.insert(_0xfd10e6, _0x3cdbd2, _0x1414c0);
            }
            return;
        }
        this.node.insert(_0xfd10e6, _0x2f9604, _0x1414c0);
    }
    ["match"](_0xc17ae9, _0x1b6883) {
        return this.node.search(_0xc17ae9, _0x1b6883);
    }
};
var a0_0x5eeefa = class extends a0_0x4a74cb {
    constructor(_0xa42ad9 = {}) {
        super(_0xa42ad9);
        this.router = _0xa42ad9.router ?? new a0_0x55e5d9({
            'routers': [new a0_0x28e6c3(), new a0_0x3990ae()]
        });
    }
};
var a0_0x275996;
function a0_0xe2424d() {
    return typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node;
}
function a0_0x3ae3ff(_0x312fac) {
    if (_0x312fac.token_prefix === '/' || _0x312fac.token_prefix === '//' || _0x312fac.token_prefix === '') {
        _0x312fac.token_prefix = "/default/";
        _0x312fac.default_password = true;
    }
    return _0x312fac;
}
function a0_0x532efc(_0xeffcbf) {
    if (!a0_0xe2424d()) {
        console.log("cloudflare environment!");
        a0_0x275996 = {
            'proxy_url': "http://localhost:5006",
            'token_prefix': "/user22334455/",
            'local_listen_port': 0x138e
        };
        console.log("Configuration loaded:", a0_0x275996);
        a0_0x275996 = a0_0x3ae3ff(a0_0x275996);
        _0xeffcbf(a0_0x275996);
    } else {
        console.log("node environment!");
        import("fs/promises").then(_0x5ac138 => {
            _0x5ac138.readFile("./config.json", 'utf8').then(_0x21821f => {
                a0_0x275996 = JSON.parse(_0x21821f);
                console.log("Configuration loaded:", a0_0x275996);
                a0_0x275996 = a0_0x3ae3ff(a0_0x275996);
                _0xeffcbf(a0_0x275996);
            })["catch"](_0x47105e => {
                console.error("Error loading the configuration file:", _0x47105e);
            });
        });
    }
}
function a0_0x55fdc6() {
    return a0_0x275996;
}
var a0_0x321ce2 = ["telegram.org", "nga.178.com"];
function a0_0x6d1019(_0x4b98f2) {
    let _0x38532d = false;
    a0_0x321ce2.forEach(_0x25f227 => {
        if (_0x4b98f2.includes(_0x25f227)) {
            _0x38532d = true;
        }
    });
    return _0x38532d;
}
var a0_0x2a8d20 = ["telegram.org/service_worker.js", "elcomercio.pe", "exchangebank.com"];
function a0_0x44c9d6(_0x350071) {
    let _0x55a768 = false;
    a0_0x2a8d20.map(_0x4efa93 => {
        if (_0x350071.includes(_0x4efa93)) {
            _0x55a768 = true;
        }
    });
    return _0x55a768;
}
var a0_0xccd7ca = [{
    'domain': 'google.com',
    'replacements': [{
        'regex': /;\w+?\.integrity='sha.+?';/,
        'replacement': ';'
    }]
}];
var a0_0x524257 = [{
    'regex': /\.URL\b/,
    'replacement': '.___URL'
}, {
    'regex': /\bdomain\b/,
    'replacement': '___domain'
}, {
    'regex': /\blocation\b/,
    'replacement': "___location"
}, {
    'regex': /\bpushState\b/,
    'replacement': '___pushState'
}, {
    'regex': /\breplaceState\b/,
    'replacement': '___replaceState'
}];
function a0_0x3d28e6({
    body: _0xd0065d,
    proxy_real_host: _0x4cfc9d,
    proxy_url_prefix: _0x25fcc7
}) {
    let _0x3b8ab6 = _0xd0065d;
    if (_0xd0065d.indexOf("document.URL") !== -0x1) { }
    if (!a0_0x6d1019(_0x4cfc9d)) {
        a0_0x524257.forEach(({
            regex: _0x5f8aa9,
            replacement: _0x2544e0
        }) => {
            _0x3b8ab6 = _0x3b8ab6.replace(new RegExp(_0x5f8aa9, 'g'), _0x2544e0);
        });
    }
    return _0x3b8ab6;
}
var a0_0x494cf9;
var a0_0x5093a7 = ({
    location_value: _0x1f5a43,
    proxy_url_prefix: _0x22d46a,
    proxy_real_protocol: _0x34a65c,
    proxy_real_host: _0x9782ce
}) => {
    const _0x2634ef = {
        '^(http[s]?)://([-a-z0-9A-Z.]+)': _0x22d46a + "$1/$2"
    };
    for (let _0x30df27 in _0x2634ef) {
        let _0x80a6ef = new RegExp(_0x30df27, 'g');
        _0x1f5a43 = _0x1f5a43.replace(_0x80a6ef, _0x2634ef[_0x30df27]);
    }
    return _0x1f5a43;
};
function a0_0x587d56({
    location_value: _0x5e0668,
    proxy_url_prefix: _0x2d8ba9,
    proxy_real_protocol: _0x2a877d,
    proxy_real_host: _0x4488f3
}) {
    let _0x31ae0f = a0_0x5093a7({
        'location_value': _0x5e0668,
        'proxy_url_prefix': _0x2d8ba9,
        'proxy_real_protocol': _0x2a877d,
        'proxy_real_host': _0x4488f3
    });
    if (_0x31ae0f.startsWith('/')) {
        _0x31ae0f = _0x2d8ba9 + _0x2a877d + '/' + _0x4488f3 + _0x31ae0f;
    }
    return _0x31ae0f;
}
function a0_0x3d6008() {
    return typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node;
}
async function a0_0x10af28(_0x244c99, _0x50353a) {
    return a0_0x3d6008() ? await a0_0x3a496b(_0x244c99, _0x50353a) : await a0_0x18645c(_0x244c99, _0x50353a);
}
async function a0_0x3a496b(_0x755dea, _0x4b81be) {
    if (!a0_0x494cf9) {
        a0_0x494cf9 = await import("zlib");
    }
    try {
        if (_0x4b81be === 'br') {
            return a0_0x494cf9.brotliCompressSync(_0x755dea);
        } else {
            return _0x4b81be === 'gzip' ? a0_0x494cf9.gzipSync(_0x755dea) : _0x755dea;
        }
    } catch (_0x4286dc) {
        console.error("Compression error:", _0x4286dc);
        return _0x755dea;
    }
}
async function a0_0x18645c(_0xd1d80f, _0x206624) {
    if (typeof CompressionStream !== "undefined") {
        try {
            let _0x5c2864;
            if (_0x206624 === 'gzip' || _0x206624 === 'br') {
                _0x5c2864 = _0xd1d80f.pipeThrough(new CompressionStream(_0x206624));
            } else {
                throw new Error("Unsupported encoding for compression");
            }
            const _0x55c849 = _0x5c2864.getReader();
            let _0x35eebf = [];
            let _0x4bcf32;
            while (!(_0x4bcf32 = await _0x55c849.read()).done) {
                _0x35eebf.push(_0x4bcf32.value);
            }
            const _0x48a119 = new Uint8Array(_0x35eebf.reduce((_0xca2a65, _0x3ed8a4) => _0xca2a65.concat(Array.from(_0x3ed8a4)), []));
            return _0x48a119;
        } catch (_0x215f94) {
            console.error("Compression error:", _0x215f94);
            return _0xd1d80f;
        }
    } else {
        console.error("Compression not supported in this environment or for the specified format.");
        return _0xd1d80f;
    }
}
function a0_0x2203d7(_0x3000ce, _0x422e01) {
    const _0x4ded56 = new RegExp(_0x422e01, 'i');
    const _0x5bb391 = _0x4ded56.exec(_0x3000ce);
    return _0x5bb391 ? _0x5bb391.index + _0x5bb391[0x0].length : -0x1;
}
async function a0_0x270192({
    proxyResponse: _0x19fb12,
    newResHeaders: _0xac774e,
    req: _0x4ec948
}) {
    const _0x411a18 = a0_0x275996;
    const _0x2586f7 = _0x411a18.proxy_url + _0x411a18.token_prefix;
    const _0x3eee3d = _0x4ec948.proxy_real_protocol;
    const _0x2244ba = _0x4ec948.proxy_real_host;
    const _0x1323c2 = "<script>\n  if (!window.siteproxy_injected_flag) { // only load once\n    window.siteproxy_injected_flag = true;\n    var proxy_url_prefix = '" + _0x2586f7 + "';\n    var proxy_real_protocol = '" + _0x3eee3d + "';\n    var proxy_real_host = '" + _0x2244ba + "';\n    var config_proxy_url = '" + _0x411a18.proxy_url + "';\n    var config_token_prefix = '" + _0x411a18.token_prefix + "';\n  ";
    const _0x489d5e = _0x1323c2 + "function _0x1b27a9(_0x33f129){return new Promise(_0x329d31=>setTimeout(_0x329d31,_0x33f129));}window[_0x2673(0x2b8)]=window['URL'];var _0x15af52=window[_0x2673(0x2b1)];window[_0x2673(0x2b1)]=function(_0x57a752,_0x50b85c,_0x51deba){const _0x4a0d34={'RPtDY':function(_0x3794c9,_0x3f0774){return _0x3794c9(_0x3f0774);}};let _0x3aad39=_0x4a0d34[_0x2673(0x1ba)](_0x52e538,_0x57a752);return _0x15af52[_0x2673(0x1ad)](window,_0x3aad39,_0x50b85c,_0x51deba);};var _0x9c490e=History['prototype'][_0x2673(0x213)],_0x41270b=History[_0x2673(0x1f6)][_0x2673(0x2c8)+'te'];History[_0x2673(0x1f6)]['___pushSta'+'te']=function(_0x2d373a,_0x4916d1,_0x84ce4d){const _0x4d855={'YOdrW':function(_0x29e120,_0x2a3935){return _0x29e120(_0x2a3935);}},_0xcd802=_0x4d855['YOdrW'](_0x52e538,_0x84ce4d);return _0x9c490e[_0x2673(0x18b)](this,[_0x2d373a,_0x4916d1,_0xcd802]);},History[_0x2673(0x1f6)][_0x2673(0x27d)+_0x2673(0x281)]=function(_0xd4b62b,_0x224238,_0x1b4079){const _0x467154={'sTbrk':function(_0x2a44b4,_0xe8e913){return _0x2a44b4(_0xe8e913);}},_0x431e8b=_0x467154[_0x2673(0x1ae)](_0x52e538,_0x1b4079);return _0x41270b[_0x2673(0x18b)](this,[_0xd4b62b,_0x224238,_0x431e8b]);},Object['defineProp'+_0x2673(0x250)](document,_0x2673(0x2b8),{'get':function(){let _0x40626e=_0xd03568(document['URL']);return _0x40626e;},'set':function(_0x2c3b0e){const _0xd660bc={'sJZEW':function(_0x527114,_0x14fe1d){return _0x527114(_0x14fe1d);}};let _0x10853e=_0xd660bc[_0x2673(0x241)](_0x52e538,_0x2c3b0e);document[_0x2673(0x1c2)]=_0x10853e;}}),Object[_0x2673(0x1e1)+'erty'](document,'___domain',{'get':function(){const _0x3d5a6d=_0x2fb096(document[_0x2673(0x1c2)]);return _0x3d5a6d;},'set':function(_0xab0a22){}});class _0x528e16{constructor(_0xed3a9a){this[_0x2673(0x1f8)+_0x2673(0x24b)]=_0xed3a9a;}[_0x2673(0x2a5)](){const _0x478d4d={'pnUby':function(_0x3e4ab1,_0x46aad4){return _0x3e4ab1(_0x46aad4);}},_0x18671a=_0x478d4d[_0x2673(0x23a)](_0xd03568,this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x211)]);return _0x18671a;}[_0x2673(0x2c9)](_0x34bff7){const _0x4405c2={'MZFfH':function(_0x25e280,_0x2e2219){return _0x25e280(_0x2e2219);}},_0x434150=_0x4405c2[_0x2673(0x1a5)](_0x52e538,_0x34bff7);this[_0x2673(0x1f8)+'cation']['assign'](_0x434150);}[_0x2673(0x248)](_0x3134ca=![]){this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x248)](_0x3134ca);}['replace'](_0x292ef4){const _0x16f818=_0x52e538(_0x292ef4);this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x295)](_0x16f818);}get['href'](){const _0x490953={'HMNYa':function(_0x469c54,_0x3d42a7){return _0x469c54(_0x3d42a7);}},_0x4b34fe=_0x490953[_0x2673(0x238)](_0xd03568,this['originalLo'+'cation'][_0x2673(0x211)]);return _0x4b34fe;}set[_0x2673(0x211)](_0x52eec7){const _0x3b8738=_0x52e538(_0x52eec7);this['originalLo'+'cation'][_0x2673(0x211)]=_0x3b8738;}get['origin'](){const _0xb4ca85={};_0xb4ca85[_0x2673(0x2b6)]=function(_0xab32ff,_0x133b02){return _0xab32ff+_0x133b02;},_0xb4ca85[_0x2673(0x23f)]=function(_0x29e7d8,_0x35a11f){return _0x29e7d8+_0x35a11f;},_0xb4ca85['tdmCD']=_0x2673(0x1c9);const _0x26d22c=_0xb4ca85,_0x2e7a96=_0x26d22c[_0x2673(0x2b6)](_0x26d22c[_0x2673(0x23f)](proxy_real_protocol,_0x26d22c[_0x2673(0x218)]),proxy_real_host);return _0x2e7a96;}get[_0x2673(0x1cf)](){const _0x4119c9={'uYBoA':function(_0x267657,_0x4139ef){return _0x267657+_0x4139ef;},'ouPPN':function(_0x4b5b82,_0x5a2fbb){return _0x4b5b82(_0x5a2fbb);}},_0x3fc83b=_0x4119c9[_0x2673(0x17b)](_0x4119c9[_0x2673(0x2b9)](_0x346cc9,this['originalLo'+'cation']['href']),':');return _0x3fc83b;}set[_0x2673(0x1cf)](_0x26c33f){const _0x503c9c={'XerWJ':function(_0x2ee271,_0xa60002,_0x2b779b){return _0x2ee271(_0xa60002,_0x2b779b);}},_0xdaf6a1=_0x503c9c[_0x2673(0x20a)](_0x2f6183,this['originalLo'+'cation'][_0x2673(0x211)],_0x26c33f);this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x211)]=_0xdaf6a1;}get[_0x2673(0x25a)](){const _0x5e2037={'xrcSO':function(_0x243254,_0x18ded9){return _0x243254(_0x18ded9);}},_0xfb9f81=_0x5e2037[_0x2673(0x24e)](_0x5af688,this[_0x2673(0x1f8)+_0x2673(0x24b)]['href']);return _0xfb9f81;}set['pathname'](_0x5aa34d){}get['host'](){const _0x2c077b={'DGABW':function(_0x19a6b5,_0x178535){return _0x19a6b5(_0x178535);}},_0x1ad26d=_0x2c077b[_0x2673(0x278)](_0x2fb096,this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x211)]);return _0x1ad26d;}set[_0x2673(0x224)](_0x3f0dc6){}get['search'](){const _0xb35a46=this['originalLo'+_0x2673(0x24b)][_0x2673(0x20f)];return _0xb35a46;}set[_0x2673(0x20f)](_0x5eec82){}get[_0x2673(0x1eb)](){const _0x731692=this['originalLo'+_0x2673(0x24b)][_0x2673(0x1eb)];return _0x731692;}set[_0x2673(0x1eb)](_0x58e32b){this[_0x2673(0x1f8)+_0x2673(0x24b)][_0x2673(0x1eb)]=_0x58e32b;}get[_0x2673(0x2b3)](){const _0x182578={'hgGEx':function(_0x22d611,_0x2f0f28){return _0x22d611(_0x2f0f28);}};let _0x5d6e41=_0x182578[_0x2673(0x270)](_0x2fb096,this[_0x2673(0x1f8)+'cation'][_0x2673(0x211)]);const _0xeea654=_0x5d6e41['indexOf'](':');return _0xeea654!==-0x1&&(_0x5d6e41=_0x5d6e41[_0x2673(0x2bc)](0x0,_0xeea654)),_0x5d6e41;}set[_0x2673(0x2b3)](_0x50deba){}get[_0x2673(0x246)](){const _0x5e0a2b={'HeDuF':function(_0x49d24b,_0x42806c){return _0x49d24b(_0x42806c);},'jakQN':function(_0x4edcbd,_0x39477d){return _0x4edcbd!==_0x39477d;},'OEWPm':function(_0x1f64e2,_0x966b26){return _0x1f64e2+_0x966b26;}},_0x1e806f=_0x5e0a2b['HeDuF'](_0x2fb096,this['originalLo'+'cation'][_0x2673(0x211)]),_0x68710b=_0x1e806f[_0x2673(0x1d6)](':');let _0x2d128d='';return _0x5e0a2b['jakQN'](_0x68710b,-0x1)&&(_0x2d128d=_0x1e806f[_0x2673(0x2bc)](_0x5e0a2b[_0x2673(0x20e)](_0x68710b,0x1))),_0x2d128d;}set[_0x2673(0x246)](_0x1e50ba){}}(function(){const _0x4d6e59={};_0x4d6e59[_0x2673(0x206)]='___locatio'+'n';const _0x4ba412=_0x4d6e59;let _0x1759f2=new _0x528e16(window[_0x2673(0x1fe)]);window[_0x2673(0x190)+'n']=_0x1759f2,document[_0x2673(0x190)+'n']=window[_0x2673(0x190)+'n'];const _0x2c3d2c={};_0x2c3d2c[_0x2673(0x2d4)]=function(_0x1e9f4e){_0x1759f2[_0x2673(0x211)]=_0x1e9f4e;},_0x2c3d2c[_0x2673(0x269)]=function(){return _0x1759f2;},_0x2c3d2c[_0x2673(0x27f)+'le']=!![],Object[_0x2673(0x1e1)+_0x2673(0x250)](window,_0x4ba412[_0x2673(0x206)],_0x2c3d2c);const _0x4f8ecb={};_0x4f8ecb[_0x2673(0x2d4)]=function(_0x318a24){_0x1759f2[_0x2673(0x211)]=_0x318a24;},_0x4f8ecb[_0x2673(0x269)]=function(){return _0x1759f2;},_0x4f8ecb[_0x2673(0x27f)+'le']=!![],Object[_0x2673(0x1e1)+_0x2673(0x250)](document,_0x4ba412[_0x2673(0x206)],_0x4f8ecb);}());function _0x24291a(_0x4a0f16,_0x1df63a,_0x11f071){const _0x5c3d02={};_0x5c3d02[_0x2673(0x19c)]=_0x2673(0x235),_0x5c3d02['UAcMN']=function(_0x38d8e3,_0x47442b){return _0x38d8e3+_0x47442b;},_0x5c3d02[_0x2673(0x1b2)]=_0x2673(0x1f4),_0x5c3d02[_0x2673(0x184)]='http/',_0x5c3d02['LxANq']=_0x2673(0x1f5),_0x5c3d02['prXaS']=function(_0x1f61a5,_0xfb4e4e){return _0x1f61a5+_0xfb4e4e;},_0x5c3d02[_0x2673(0x19a)]=function(_0x5b05cd,_0x172e99){return _0x5b05cd+_0x172e99;},_0x5c3d02[_0x2673(0x178)]=_0x2673(0x1c9);const _0x437a89=_0x5c3d02;if(_0x4a0f16[_0x2673(0x1d8)](config_proxy_url)){_0x4a0f16=_0x4a0f16['substring'](config_proxy_url[_0x2673(0x2c1)]);_0x4a0f16[_0x2673(0x1d8)](config_token_prefix)&&(_0x4a0f16=_0x4a0f16[_0x2673(0x2bc)](config_token_prefix['length']));if(_0x4a0f16['startsWith'](_0x437a89[_0x2673(0x19c)]))return _0x4a0f16=_0x437a89[_0x2673(0x21a)](_0x437a89['EzDat'],_0x4a0f16[_0x2673(0x2bc)](0x6)),_0x4a0f16;else return _0x4a0f16[_0x2673(0x1d8)](_0x437a89[_0x2673(0x184)])?(_0x4a0f16=_0x437a89[_0x2673(0x1c1)]+_0x4a0f16['substring'](0x5),_0x4a0f16):_0x437a89[_0x2673(0x216)](_0x437a89[_0x2673(0x19a)](_0x1df63a,_0x437a89[_0x2673(0x178)]),_0x11f071)+_0x4a0f16;}return _0x4a0f16;}var _0x1c1bde=window[_0x2673(0x242)+'e'][_0x2673(0x2ad)](window);window['postMessag'+'e']=function(_0x37f6e5,_0x46776a,_0x596fa6){const _0x4406ed={'THIAb':function(_0x565ef0,_0x2fffc1,_0x2c3782,_0x54c7e7){return _0x565ef0(_0x2fffc1,_0x2c3782,_0x54c7e7);}};_0x4406ed[_0x2673(0x1ff)](_0x1c1bde,_0x37f6e5,'*',_0x596fa6);};var _0x41b23b=window['fetch'];window[_0x2673(0x1b4)]=async(..._0x47efe3)=>{const _0x13ae87={'wlWAb':function(_0x5ab874,_0x504daa){return _0x5ab874 instanceof _0x504daa;},'ZGOiY':_0x2673(0x1a6)+_0x2673(0x1a2)+_0x2673(0x1ab),'DMxJB':_0x2673(0x1a6)+_0x2673(0x198)+'t','BXEii':function(_0x8bb2cf,_0x40af89,_0x23800b,_0x2d1409){return _0x8bb2cf(_0x40af89,_0x23800b,_0x2d1409);},'fBtHt':_0x2673(0x1a6)+'real-refer'+'er','DIVcq':_0x2673(0x1a6)+_0x2673(0x177)+_0x2673(0x245)+_0x2673(0x2b0),'nIXXZ':function(_0x55e5c5,..._0x98a1d8){return _0x55e5c5(..._0x98a1d8);}};if(_0x13ae87['wlWAb'](_0x47efe3[0x0],Request)){const _0x5431a4=_0x47efe3[0x0];let _0x3cea7a=new Headers(_0x5431a4[_0x2673(0x263)]);_0x3cea7a[_0x2673(0x2d4)](_0x13ae87[_0x2673(0x272)],proxy_real_protocol),_0x3cea7a['set'](_0x13ae87[_0x2673(0x1fc)],proxy_real_host);const _0x5eb3d2=_0x13ae87[_0x2673(0x173)](_0x24291a,window[_0x2673(0x1fe)][_0x2673(0x211)],proxy_real_protocol,proxy_real_host);_0x3cea7a[_0x2673(0x2d4)](_0x13ae87['fBtHt'],_0x5eb3d2),_0x3cea7a[_0x2673(0x2d4)](_0x13ae87['DIVcq'],window[_0x2673(0x1fe)][_0x2673(0x25a)]);const _0x2c0546={};_0x2c0546[_0x2673(0x263)]=_0x3cea7a,_0x47efe3[0x0]=new Request(_0x5431a4,_0x2c0546);}else{let _0x19c333=_0x47efe3[0x1]||{};_0x19c333['headers']=new Headers(_0x19c333[_0x2673(0x263)]||{}),_0x19c333[_0x2673(0x263)][_0x2673(0x2d4)](_0x13ae87[_0x2673(0x272)],proxy_real_protocol),_0x19c333[_0x2673(0x263)]['set'](_0x13ae87['DMxJB'],proxy_real_host);const _0x2d1e83=_0x24291a(window[_0x2673(0x1fe)][_0x2673(0x211)],proxy_real_protocol,proxy_real_host);_0x19c333[_0x2673(0x263)][_0x2673(0x2d4)](_0x2673(0x1a6)+_0x2673(0x29a)+'er',_0x2d1e83),_0x19c333[_0x2673(0x263)]['set'](_0x13ae87['DIVcq'],window['location'][_0x2673(0x25a)]),_0x47efe3[0x1]=_0x19c333;}return _0x13ae87['nIXXZ'](_0x41b23b,..._0x47efe3);};var _0x1c13c8=XMLHttpRequest[_0x2673(0x1f6)][_0x2673(0x2b1)];XMLHttpRequest[_0x2673(0x1f6)]['open']=async function(_0x296d40,_0x5515bd,..._0x3d09cc){const _0xe8e333={'cEOQc':_0x2673(0x1a6)+_0x2673(0x1a2)+'tocol','rhkVg':_0x2673(0x1a6)+_0x2673(0x198)+'t','AuOJL':function(_0x174d48,_0x53dc3d,_0xe6aa20,_0xd96894){return _0x174d48(_0x53dc3d,_0xe6aa20,_0xd96894);},'KuVGZ':_0x2673(0x1a6)+'real-refer'+'er'};_0x1c13c8['call'](this,_0x296d40,_0x5515bd,..._0x3d09cc),this[_0x2673(0x21f)+'Header'](_0xe8e333[_0x2673(0x21e)],proxy_real_protocol),this[_0x2673(0x21f)+_0x2673(0x244)](_0xe8e333['rhkVg'],proxy_real_host);const _0x5bbdf9=_0xe8e333[_0x2673(0x1ce)](_0x24291a,window['location'][_0x2673(0x211)],proxy_real_protocol,proxy_real_host);this[_0x2673(0x21f)+_0x2673(0x244)](_0xe8e333['KuVGZ'],_0x5bbdf9),this[_0x2673(0x21f)+_0x2673(0x244)](_0x2673(0x1a6)+_0x2673(0x177)+'ation-path'+'name',window[_0x2673(0x1fe)][_0x2673(0x25a)]);};function _0x5af688(_0x337587){const _0x3fa8db={};_0x3fa8db[_0x2673(0x2a6)]='https/',_0x3fa8db[_0x2673(0x28f)]=function(_0x40406c,_0x333a2f){return _0x40406c+_0x333a2f;},_0x3fa8db[_0x2673(0x1c0)]=_0x2673(0x1f4),_0x3fa8db['zzjJi']='http/',_0x3fa8db[_0x2673(0x24f)]=function(_0x4dce3b,_0x2b1ac9){return _0x4dce3b+_0x2b1ac9;};const _0x49e282=_0x3fa8db;if(!_0x337587||!_0x337587[_0x2673(0x1d8)](proxy_url_prefix))return'';let _0xc45279;_0x337587=_0x337587[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);if(_0x337587[_0x2673(0x1d8)](_0x49e282[_0x2673(0x2a6)]))_0xc45279=new URL(_0x49e282[_0x2673(0x28f)](_0x49e282[_0x2673(0x1c0)],_0x337587['substring'](0x6)));else _0x337587[_0x2673(0x1d8)](_0x49e282[_0x2673(0x284)])&&(_0xc45279=new URL(_0x49e282[_0x2673(0x24f)](_0x49e282['ZIbUe'],_0x337587[_0x2673(0x2bc)](0x5))));if(_0xc45279)return _0xc45279['pathname'];return'';}function _0x2fb096(_0x2f074c){const _0xbc4364={};_0xbc4364[_0x2673(0x215)]=_0x2673(0x235),_0xbc4364['DGomx']=function(_0x492752,_0x3572db){return _0x492752+_0x3572db;},_0xbc4364[_0x2673(0x1b3)]=_0x2673(0x1f4),_0xbc4364['WakMI']='http/',_0xbc4364['CDRYW']=function(_0x3ee6bb,_0x13e894){return _0x3ee6bb+_0x13e894;};const _0x281eb5=_0xbc4364;if(!_0x2f074c||!_0x2f074c[_0x2673(0x1d8)](proxy_url_prefix))return'';let _0x28fbeb;_0x2f074c=_0x2f074c[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);if(_0x2f074c[_0x2673(0x1d8)](_0x281eb5[_0x2673(0x215)]))_0x28fbeb=new URL(_0x281eb5['DGomx'](_0x281eb5['DCLbc'],_0x2f074c[_0x2673(0x2bc)](0x6)));else _0x2f074c[_0x2673(0x1d8)](_0x281eb5[_0x2673(0x1c4)])&&(_0x28fbeb=new URL(_0x281eb5['CDRYW'](_0x281eb5[_0x2673(0x1b3)],_0x2f074c['substring'](0x5))));if(_0x28fbeb)return _0x28fbeb['host'];return'';}function _0x3fe3(){const _0x58fc30=['BXEii','innerHTML','yryQO','right','window-loc','KioxE','ine;\">http','firstChild','uYBoA','querySelec','d website,','oxy proxie',' <a href=\"','yEPNk','tfRJU','https://gi','GcYAr','TDxsv','submit','cursor','Error in f','KovAF','rker regis','$2/$3','apply','attributeO','/https','/siteproxy','padding','___locatio','s://github','ement','pointer','HjbWf','op/sitepro','13px','attributeN','target-hos','PROXY_CUR_','sSSeM','getItem','VNAru','l_host=','active','ibute','eproxy\" ta','sms:','target-pro','WHqJZ','sxDfF','MZFfH','siteproxy-','dflFy','ssh:','error','nodeType','tocol','uJXAP','call','sTbrk','DUNOh','lqvSf','unDTZ','EzDat','DCLbc','fetch','unLpZ','agWJk','eAXoL','display','target','RPtDY','&times;','XUbXJ','then','script','as been re','ZIbUe','LxANq','URL','moved from','WakMI','slice','cwrpt','setAttribu','nk\" style=','://','webcal:','edAlready','forEach','scriptURL','AuOJL','protocol','iled: ','Color','about:','100%','createElem','bJTWN','indexOf','DiOMv','startsWith','ame','body','eLKwr','addEventLi','UJeKG','vQEvl','10px','BzWzU','defineProp','load','DhRQA','HImhF','ydglQ','roxy_real_','red.','background','ault','div','hash','removeAttr','//https','preventDef','yOREo','()(http[s]','span','CwxMJ','action','https://','http://','prototype','xusUX','originalLo','clPIT','ftp:','BOPEc','DMxJB','stener','location','THIAb','toLowerCas','marginTop','EBUFr','appendChil','split','sawWt','ddLIa','ilter','wGBHH','getAttribu','XerWJ','subtree','etptop/sit','lmpNc','OEWPm','search','nHQcX','href','lineHeight','pushState','sYrRX','txdra','prXaS','tor','tdmCD','ge.','UAcMN','ATudU','childList','.com/netpt','cEOQc','setRequest','url','textAlign','xy</a> for','center','host','lLkQz','insertBefo','chrome:','LWDWY','fontWeight','ation','!!! proxy ','er_registr','childNodes','log','getTime','IUTKE','ZgCqr','setItem','pUncb','dZvfw','https/','submitHook','CCPhq','HMNYa','protocol:','pnUby','width','LOCATION','5px 0','on: underl','oEakP','protocol=','sJZEW','postMessag','mailto:','Header','ation-path','port','t-decorati','reload','ations','absolute','cation','left','GEKYH','xrcSO','hbnyw','erty','LUttW','position','tration su','zgzAp','OnZsw','color','TowRt','http/','zIndex','pathname','sLJgp','self','MXcWp',' do not en','documentEl','IMEDH','service_wo','tration fa','headers','blob:','data','gKUSz','bold','data:','get','DkfCP','attributeF','vbscript:',' element h','HOST_MAP','gwBYa','hgGEx','topBarLast','ZGOiY','ker','tel:','FEiKf','data-url','service wo','DGABW','ldValue','proxy_work','tagName','#ff0000','___replace','register','configurab','top','State','offsetHeig','observe','zzjJi','click','BYJAL','&proxy_rea','formation.','siteproxy_','POST','vDARG','sAeGH','javascript','sion fetch','eTGSR','fontSize','ZxQPK','YqnMA','serviceWor','EOQKp','replace','AgjMZ','github.com','JfRjO','SvXZL','real-refer','clickListe','view-sourc','getRegistr','attributes','#ffffff','orker.js?p','iEhzD','10000','onclick','/https/','toString','AEirQ','ter your p','50%','2|0|4|5|1|','s a SitePr','!!! This i','ent','bind',' details !','bxRfX','name','open','file:','hostname','rnOPK','rget=\"_bla','HBFaE','integrity','___URL','ouPPN','dpqbS','ction chan','substring','col','https','disconnect','Shown','length','http','CURhg','VJiey','method','\"color: #f','jinJH','replaceSta','assign','orm submis','includes','_service_w','type','qTaVa','catch','style','none','(-50%)','hasAttribu','set'];_0x3fe3=function(){return _0x58fc30;};return _0x3fe3();}function _0x2f6183(_0x4d37d0,_0x1febe4){const _0xcfbd9e={};_0xcfbd9e[_0x2673(0x194)]=function(_0x144a27,_0xbe1a56){return _0x144a27+_0xbe1a56;},_0xcfbd9e[_0x2673(0x228)]=function(_0x3b9f05,_0x4771de){return _0x3b9f05+_0x4771de;};const _0x1a084c=_0xcfbd9e;if(!_0x1febe4||!_0x4d37d0||!_0x4d37d0[_0x2673(0x1d8)](proxy_url_prefix))return _0x4d37d0;return _0x4d37d0[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)])[_0x2673(0x1d8)]('https/')?_0x4d37d0=_0x1a084c[_0x2673(0x194)](_0x4d37d0[_0x2673(0x2bc)](0x0,proxy_url_prefix[_0x2673(0x2c1)]),_0x1febe4)+'/'+_0x4d37d0[_0x2673(0x2bc)](_0x1a084c[_0x2673(0x228)](proxy_url_prefix[_0x2673(0x2c1)],0x6)):_0x4d37d0=_0x1a084c[_0x2673(0x228)](_0x1a084c[_0x2673(0x194)](_0x4d37d0['substring'](0x0,proxy_url_prefix[_0x2673(0x2c1)])+_0x1febe4,'/'),_0x4d37d0[_0x2673(0x2bc)](_0x1a084c[_0x2673(0x194)](proxy_url_prefix['length'],0x5))),_0x4d37d0;}function _0x346cc9(_0x3f915b){const _0x11ff08={};_0x11ff08['GXsnW']=_0x2673(0x235),_0x11ff08[_0x2673(0x1b5)]=_0x2673(0x2be),_0x11ff08[_0x2673(0x188)]=_0x2673(0x2c2);const _0x24166b=_0x11ff08;if(!_0x3f915b||!_0x3f915b[_0x2673(0x1d8)](proxy_url_prefix))return'';_0x3f915b=_0x3f915b[_0x2673(0x2bc)](proxy_url_prefix[_0x2673(0x2c1)]);if(_0x3f915b['startsWith'](_0x24166b['GXsnW']))return _0x24166b[_0x2673(0x1b5)];else{if(_0x3f915b[_0x2673(0x1d8)]('http/'))return _0x24166b[_0x2673(0x188)];}return'';}function _0x2673(_0x238551,_0x3fe39f){const _0x267312=_0x3fe3();return _0x2673=function(_0x10546a,_0x150e1b){_0x10546a=_0x10546a-0x173;let _0x4fcc76=_0x267312[_0x10546a];return _0x4fcc76;},_0x2673(_0x238551,_0x3fe39f);}function _0xd03568(_0x3ca7f1){const _0x4bf1bf={};_0x4bf1bf[_0x2673(0x230)]=_0x2673(0x2a9)+'3',_0x4bf1bf['evtOo']=_0x2673(0x235),_0x4bf1bf[_0x2673(0x233)]=function(_0xf16432,_0x35b6c1){return _0xf16432+_0x35b6c1;},_0x4bf1bf[_0x2673(0x214)]=_0x2673(0x1f4),_0x4bf1bf[_0x2673(0x175)]=_0x2673(0x258),_0x4bf1bf[_0x2673(0x1d7)]=_0x2673(0x1f5),_0x4bf1bf[_0x2673(0x275)]=function(_0x3ee6ad,_0x3df28a){return _0x3ee6ad+_0x3df28a;};const _0x4b04b0=_0x4bf1bf,_0x2799c9=_0x4b04b0[_0x2673(0x230)][_0x2673(0x204)]('|');let _0x4e0fe7=0x0;while(!![]){switch(_0x2799c9[_0x4e0fe7++]){case'0':_0x3ca7f1=_0x3ca7f1[_0x2673(0x2bc)](config_proxy_url[_0x2673(0x2c1)]);continue;case'1':if(_0x3ca7f1[_0x2673(0x1d8)](_0x4b04b0['evtOo']))_0x3ca7f1=_0x4b04b0[_0x2673(0x233)](_0x4b04b0[_0x2673(0x214)],_0x3ca7f1[_0x2673(0x2bc)](0x6));else _0x3ca7f1[_0x2673(0x1d8)](_0x4b04b0['yryQO'])&&(_0x3ca7f1=_0x4b04b0['pUncb'](_0x4b04b0[_0x2673(0x1d7)],_0x3ca7f1[_0x2673(0x2bc)](0x5)));continue;case'2':if(!_0x3ca7f1||!_0x3ca7f1[_0x2673(0x1d8)](config_proxy_url))return _0x3ca7f1;continue;case'3':return _0x3ca7f1;case'4':_0x3ca7f1[_0x2673(0x1d8)](config_token_prefix)&&(_0x3ca7f1=_0x3ca7f1['substring'](config_token_prefix[_0x2673(0x2c1)]));continue;case'5':!_0x3ca7f1['startsWith'](_0x2673(0x2c2))&&(_0x3ca7f1=_0x4b04b0[_0x2673(0x233)](_0x4b04b0[_0x2673(0x275)](proxy_real_protocol,'/')+proxy_real_host,'/'));continue;}break;}}function _0x52e538(_0x52ff1c){const _0x538d0d={};_0x538d0d[_0x2673(0x2c3)]=_0x2673(0x243),_0x538d0d[_0x2673(0x1ef)]=_0x2673(0x227),_0x538d0d[_0x2673(0x210)]=_0x2673(0x268),_0x538d0d[_0x2673(0x1b6)]=_0x2673(0x1fa),_0x538d0d[_0x2673(0x2b4)]=_0x2673(0x274),_0x538d0d[_0x2673(0x1b7)]=_0x2673(0x1a1),_0x538d0d['gwBYa']=_0x2673(0x29c)+'e:',_0x538d0d[_0x2673(0x254)]=_0x2673(0x1ca),_0x538d0d[_0x2673(0x25b)]='content:',_0x538d0d[_0x2673(0x1f2)]=_0x2673(0x1a8),_0x538d0d[_0x2673(0x1e3)]=_0x2673(0x18a),_0x538d0d[_0x2673(0x24d)]=function(_0x7dd17e,_0x300ae1){return _0x7dd17e+_0x300ae1;},_0x538d0d[_0x2673(0x1de)]=function(_0x410aca,_0x50a463){return _0x410aca+_0x50a463;},_0x538d0d['XsTvL']=function(_0x3d9742,_0x5407e3){return _0x3d9742+_0x5407e3;},_0x538d0d['BzWzU']=function(_0x140c14,_0x3a97e8){return _0x140c14+_0x3a97e8;},_0x538d0d[_0x2673(0x298)]=_0x2673(0x2a4),_0x538d0d['dflFy']=_0x2673(0x18d);const _0x500b2d=_0x538d0d;if(!_0x52ff1c||_0x52ff1c[_0x2673(0x1d8)](proxy_url_prefix))return _0x52ff1c;if(_0x52ff1c['startsWith'](_0x2673(0x264))||_0x52ff1c[_0x2673(0x1d8)](_0x2673(0x28d)+':')||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d['CURhg'])||_0x52ff1c[_0x2673(0x1d8)]('#')||_0x52ff1c[_0x2673(0x1d8)](_0x2673(0x1d2))||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1ef)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x210)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1b6)])||_0x52ff1c[_0x2673(0x1d8)](_0x2673(0x2b2))||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x2b4)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d['eAXoL'])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x26f)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x254)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x25b)])||_0x52ff1c[_0x2673(0x1d8)](_0x500b2d[_0x2673(0x1f2)])||_0x52ff1c['startsWith'](_0x2673(0x26c)))return _0x52ff1c;_0x52ff1c[_0x2673(0x1d8)](config_proxy_url)&&(_0x52ff1c=_0x52ff1c[_0x2673(0x2bc)](config_proxy_url['length']));const _0x3bd24b={};_0x3bd24b[_0x2673(0x1f0)+'?)://([-a-'+'z0-9A-Z.]+'+')']=proxy_url_prefix+_0x500b2d['DhRQA'];const _0x28c08e=_0x3bd24b;for(let _0x50dbe2 in _0x28c08e){let _0xc44c53=new RegExp(_0x50dbe2,'g');_0x52ff1c=_0x52ff1c[_0x2673(0x295)](_0xc44c53,_0x28c08e[_0x50dbe2]);}let _0x581c86=config_proxy_url[_0x2673(0x2bc)](config_proxy_url['indexOf']('//'));_0x52ff1c[_0x2673(0x1d8)](_0x581c86)&&(_0x52ff1c=_0x52ff1c['substring'](_0x581c86[_0x2673(0x2c1)]));let _0x2a3999=_0x500b2d[_0x2673(0x24d)](_0x500b2d['vQEvl'](proxy_url_prefix+proxy_real_protocol,'/'),proxy_real_host),_0x3104ba=proxy_url_prefix;if(_0x52ff1c[_0x2673(0x1d8)]('//'))_0x52ff1c=_0x500b2d['XsTvL'](_0x500b2d[_0x2673(0x1e0)](_0x3104ba,_0x500b2d['JfRjO']),_0x52ff1c[_0x2673(0x1c5)](0x2)),_0x52ff1c=_0x52ff1c[_0x2673(0x295)](_0x2673(0x1ed),_0x500b2d[_0x2673(0x1a7)]);else _0x52ff1c[_0x2673(0x1d8)]('/')&&(_0x52ff1c=_0x500b2d[_0x2673(0x24d)](_0x2a3999,_0x52ff1c));return _0x52ff1c;}var _0x33d352=['src','href','action',_0x2673(0x276),'srcset'];const _0x546ab1={};_0x546ab1[_0x2673(0x29e)]=!![],_0x546ab1['childList']=!![],_0x546ab1[_0x2673(0x20b)]=!![],_0x546ab1[_0x2673(0x18c)+_0x2673(0x279)]=!![],_0x546ab1['characterD'+'ataOldValu'+'e']=!![],_0x546ab1[_0x2673(0x26b)+_0x2673(0x207)]=_0x33d352;var _0x5caf02=_0x546ab1;async function _0x58923c(_0x722629,_0x4c50cf){const _0x400f75={'BYJAL':function(_0x575e5f,_0x53c9e0){return _0x575e5f(_0x53c9e0);},'UZJyx':_0x2673(0x29e),'HMpwc':function(_0x21a0bb,_0x2326ca){return _0x21a0bb===_0x2326ca;},'lqvSf':_0x2673(0x1be),'dpqbS':'integrity','TowRt':function(_0x4ec7ab,_0x526a33){return _0x4ec7ab!==_0x526a33;},'LUttW':_0x2673(0x21c)};_0x4c50cf[_0x2673(0x2bf)](),_0x722629[_0x2673(0x1cc)](_0x3d6bd6=>{switch(_0x3d6bd6['type']){case _0x400f75['UZJyx']:let _0x36aaa0=_0x3d6bd6[_0x2673(0x1b9)]['getAttribu'+'te'](_0x3d6bd6[_0x2673(0x197)+'ame']);if(_0x33d352['includes'](_0x3d6bd6[_0x2673(0x197)+_0x2673(0x1d9)])){let _0xcf72d3=_0x400f75[_0x2673(0x286)](_0x52e538,_0x36aaa0);_0x400f75['HMpwc'](_0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x27b)][_0x2673(0x200)+'e'](),_0x400f75[_0x2673(0x1b0)])&&_0x3d6bd6['target'][_0x2673(0x2d3)+'te'](_0x400f75[_0x2673(0x2ba)])&&_0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x1ec)+_0x2673(0x19f)](_0x400f75[_0x2673(0x2ba)]),_0x400f75[_0x2673(0x257)](_0xcf72d3,_0x36aaa0)&&_0x3d6bd6[_0x2673(0x1b9)][_0x2673(0x1c7)+'te'](_0x3d6bd6[_0x2673(0x197)+_0x2673(0x1d9)],_0xcf72d3);}break;case _0x400f75[_0x2673(0x251)]:_0x3d6bd6['addedNodes']['forEach'](_0x45283b=>{_0x400f75[_0x2673(0x286)](_0x570281,_0x45283b);});break;}}),_0x4c50cf[_0x2673(0x283)](document['documentEl'+_0x2673(0x192)],_0x5caf02);}function _0x570281(_0x36bfd3){const _0x1d74d3={'ZxQPK':function(_0x1fa749,_0x565018){return _0x1fa749(_0x565018);},'VJiey':function(_0x5156e0,_0x4390b5){return _0x5156e0(_0x4390b5);},'gKUSz':_0x2673(0x2b7),'tfRJU':function(_0x70856f,_0x21ec67){return _0x70856f!==_0x21ec67;},'dZvfw':function(_0x3a8ac0,_0x314d2b){return _0x3a8ac0===_0x314d2b;}};_0x36bfd3[_0x2673(0x22d)][_0x2673(0x1cc)](_0xdab224=>{_0x1d74d3[_0x2673(0x291)](_0x570281,_0xdab224);});if(_0x1d74d3[_0x2673(0x234)](_0x36bfd3[_0x2673(0x1aa)],Node['ELEMENT_NO'+'DE'])){const _0x330fba=_0x33d352;_0x330fba['forEach'](_0x2879b7=>{if(_0x36bfd3[_0x2673(0x2d3)+'te'](_0x2879b7)){let _0x27f592=_0x36bfd3[_0x2673(0x209)+'te'](_0x2879b7),_0x5ce4b8=_0x1d74d3[_0x2673(0x2c4)](_0x52e538,_0x27f592);_0x36bfd3[_0x2673(0x27b)][_0x2673(0x200)+'e']()===_0x2673(0x1be)&&_0x36bfd3[_0x2673(0x2d3)+'te'](_0x1d74d3[_0x2673(0x266)])&&_0x36bfd3['removeAttr'+_0x2673(0x19f)](_0x1d74d3['gKUSz']),_0x1d74d3[_0x2673(0x181)](_0x5ce4b8,_0x27f592)&&_0x36bfd3[_0x2673(0x1c7)+'te'](_0x2879b7,_0x5ce4b8);}});}}function _0x5794be(){const _0x2cea2b={};_0x2cea2b[_0x2673(0x180)]=_0x2673(0x271)+_0x2673(0x2c0),_0x2cea2b[_0x2673(0x1bc)]=function(_0x3f79cb,_0x10eded){return _0x3f79cb<_0x10eded;},_0x2cea2b['OybHg']=function(_0x4ea286,_0x550310){return _0x4ea286-_0x550310;},_0x2cea2b[_0x2673(0x1c6)]=function(_0x217769,_0x30b3a3){return _0x217769*_0x30b3a3;},_0x2cea2b['YqnMA']='fixed',_0x2cea2b[_0x2673(0x1dd)]=_0x2673(0x27c),_0x2cea2b['sawWt']=_0x2673(0x29f),_0x2cea2b[_0x2673(0x225)]=_0x2673(0x223),_0x2cea2b['ATudU']=_0x2673(0x196),_0x2cea2b['wGBHH']='20px',_0x2cea2b[_0x2673(0x231)]=_0x2673(0x267),_0x2cea2b['CCPhq']=_0x2673(0x2a2),_0x2cea2b[_0x2673(0x296)]=_0x2673(0x23d),_0x2cea2b['BaPsG']=_0x2673(0x1f1),_0x2cea2b['GcYAr']=_0x2673(0x1bb),_0x2cea2b[_0x2673(0x1db)]=_0x2673(0x24a),_0x2cea2b[_0x2673(0x1a3)]=_0x2673(0x1df),_0x2cea2b[_0x2673(0x1a4)]=_0x2673(0x2a8),_0x2cea2b[_0x2673(0x2ce)]='translateY'+_0x2673(0x2d2),_0x2cea2b[_0x2673(0x1b1)]=_0x2673(0x193),_0x2cea2b[_0x2673(0x1d5)]=_0x2673(0x2ab)+_0x2673(0x2aa)+_0x2673(0x17e)+_0x2673(0x17d)+_0x2673(0x25e)+_0x2673(0x2a7)+'ersonal in'+_0x2673(0x288)+' Refer to:'+_0x2673(0x17f)+_0x2673(0x182)+'thub.com/n'+_0x2673(0x20c)+_0x2673(0x1a0)+_0x2673(0x2b5)+_0x2673(0x1c8)+_0x2673(0x2c6)+'fffff; tex'+_0x2673(0x247)+_0x2673(0x23e)+_0x2673(0x179)+_0x2673(0x191)+_0x2673(0x21d)+_0x2673(0x195)+_0x2673(0x222)+_0x2673(0x2ae)+'!!';const _0x56af95=_0x2cea2b;var _0x2a6a1a=localStorage[_0x2673(0x19b)](_0x56af95[_0x2673(0x180)]),_0x92d8ae=new Date()[_0x2673(0x22f)]();if(_0x2a6a1a&&_0x56af95[_0x2673(0x1bc)](_0x56af95['OybHg'](_0x92d8ae,parseInt(_0x2a6a1a)),_0x56af95[_0x2673(0x1c6)](0x18*0x3c*0x3c,0x3e8)))return;var _0x334326=document[_0x2673(0x1d4)+_0x2673(0x2ac)](_0x2673(0x1ea));_0x334326[_0x2673(0x2d0)][_0x2673(0x252)]=_0x56af95[_0x2673(0x292)],_0x334326['style']['top']='0',_0x334326[_0x2673(0x2d0)][_0x2673(0x24c)]='0',_0x334326[_0x2673(0x2d0)][_0x2673(0x23b)]=_0x2673(0x1d3),_0x334326[_0x2673(0x2d0)][_0x2673(0x1e8)+_0x2673(0x1d1)]=_0x56af95[_0x2673(0x1dd)],_0x334326['style'][_0x2673(0x256)]=_0x56af95[_0x2673(0x205)],_0x334326[_0x2673(0x2d0)][_0x2673(0x221)]=_0x56af95['lLkQz'],_0x334326[_0x2673(0x2d0)][_0x2673(0x290)]=_0x56af95[_0x2673(0x21b)],_0x334326[_0x2673(0x2d0)][_0x2673(0x212)]=_0x56af95[_0x2673(0x208)],_0x334326[_0x2673(0x2d0)][_0x2673(0x229)]=_0x56af95[_0x2673(0x231)],_0x334326[_0x2673(0x2d0)][_0x2673(0x259)]=_0x56af95[_0x2673(0x237)],_0x334326[_0x2673(0x2d0)][_0x2673(0x18f)]=_0x56af95[_0x2673(0x296)];var _0xb53208=document['createElem'+_0x2673(0x2ac)](_0x56af95['BaPsG']);_0xb53208[_0x2673(0x174)]=_0x56af95[_0x2673(0x183)],_0xb53208[_0x2673(0x2d0)][_0x2673(0x252)]=_0x56af95[_0x2673(0x1db)],_0xb53208[_0x2673(0x2d0)][_0x2673(0x176)]=_0x56af95['WHqJZ'],_0xb53208['style'][_0x2673(0x280)]=_0x56af95[_0x2673(0x1a4)],_0xb53208[_0x2673(0x2d0)]['transform']=_0x56af95['qTaVa'],_0xb53208[_0x2673(0x2d0)][_0x2673(0x186)]=_0x56af95[_0x2673(0x1b1)],_0xb53208[_0x2673(0x2d0)][_0x2673(0x290)]=_0x56af95[_0x2673(0x208)],_0xb53208[_0x2673(0x2d0)][_0x2673(0x212)]=_0x56af95[_0x2673(0x208)],_0xb53208[_0x2673(0x2a3)]=function(){_0x334326[_0x2673(0x2d0)][_0x2673(0x1b8)]=_0x2673(0x2d1),document[_0x2673(0x1da)][_0x2673(0x2d0)][_0x2673(0x201)]='0',localStorage[_0x2673(0x232)](_0x56af95[_0x2673(0x180)],new Date()[_0x2673(0x22f)]()[_0x2673(0x2a5)]());},_0x334326['innerHTML']=_0x56af95[_0x2673(0x1d5)],_0x334326[_0x2673(0x203)+'d'](_0xb53208),document[_0x2673(0x1da)][_0x2673(0x226)+'re'](_0x334326,document['body'][_0x2673(0x17a)]),document[_0x2673(0x1da)][_0x2673(0x2d0)][_0x2673(0x201)]=_0x334326[_0x2673(0x282)+'ht']+'px';}var _0x24ebe1=new MutationObserver(_0x58923c);_0x24ebe1[_0x2673(0x283)](document[_0x2673(0x25f)+_0x2673(0x192)],_0x5caf02),document[_0x2673(0x1dc)+_0x2673(0x1fd)]('DOMContent'+'Loaded',()=>{const _0x2e2601={'SvXZL':function(_0x459263){return _0x459263();}};_0x2e2601[_0x2673(0x299)](_0x5794be);});function _0x4ddc74(_0x9c5aae,_0x378d4f){const _0x512885={};_0x512885['bMpSk']=function(_0x27c103,_0x326f26){return _0x27c103!==_0x326f26;};const _0x43bc27=_0x512885;if(!(_0x9c5aae instanceof HTMLElement)||!_0x9c5aae[_0x2673(0x2d3)+'te'](_0x378d4f)||_0x9c5aae[_0x2673(0x29b)+'nerAdded'])return;_0x9c5aae[_0x2673(0x29b)+'nerAdded']=!![],_0x9c5aae[_0x2673(0x1dc)+_0x2673(0x1fd)](_0x2673(0x285),function(_0x4b155c){const _0x468621=_0x9c5aae['getAttribu'+'te'](_0x378d4f),_0x5e929e=_0x52e538(_0x9c5aae[_0x2673(0x209)+'te'](_0x378d4f));_0x43bc27['bMpSk'](_0x5e929e,_0x468621)&&_0x9c5aae[_0x2673(0x1c7)+'te'](_0x378d4f,_0x5e929e);});}function _0x56a6d2(_0x940e23){const _0x5aa3e0={'gEiyx':function(_0x48f610,_0x4005e2){return _0x48f610(_0x4005e2);},'jinJH':function(_0x5e4940,_0x5712b9){return _0x5e4940 instanceof _0x5712b9;},'iEhzD':'submit'};if(!_0x5aa3e0[_0x2673(0x2c7)](_0x940e23,HTMLFormElement)||!_0x940e23['hasAttribu'+'te'](_0x2673(0x1f3))||_0x940e23[_0x2673(0x236)+_0x2673(0x1cb)])return;_0x940e23['submitHook'+'edAlready']=!![],_0x940e23[_0x2673(0x1dc)+_0x2673(0x1fd)](_0x5aa3e0[_0x2673(0x2a1)],function(_0xf12f10){if(!_0x940e23||!_0x940e23['parentNode']){console[_0x2673(0x1a9)]('hookFormSu'+'bmit: Form'+_0x2673(0x26d)+_0x2673(0x1bf)+_0x2673(0x1c3)+' the DOM, '+'skipping a'+_0x2673(0x2bb)+_0x2673(0x219));return;}_0xf12f10[_0x2673(0x1ee)+_0x2673(0x1e9)](),_0xf12f10['target'][_0x2673(0x1f3)]=_0x5aa3e0['gEiyx'](_0x52e538,_0xf12f10[_0x2673(0x1b9)][_0x2673(0x1f3)]),_0xf12f10[_0x2673(0x1b9)]['submit']();});}function _0x2ebfd6(_0xb6eb05,_0x3cb578,_0x28da71){const _0x1cd9ae={};_0x1cd9ae[_0x2673(0x1f7)]='PROXY_URL_'+_0x2673(0x26e);const _0x28e3be=_0x1cd9ae;if(window[_0x2673(0x27a)+_0x2673(0x22c)+_0x2673(0x22a)]&&window[_0x2673(0x27a)+_0x2673(0x22c)+_0x2673(0x22a)][_0x2673(0x19e)]){const _0x511819={};_0x511819['pathname']=_0xb6eb05,_0x511819['real_proto'+_0x2673(0x2bd)]=_0x3cb578,_0x511819['real_host']=_0x28da71;const _0x48bb1d={};_0x48bb1d['type']=_0x28e3be['xusUX'],_0x48bb1d[_0x2673(0x265)]=_0x511819,window['proxy_work'+_0x2673(0x22c)+_0x2673(0x22a)][_0x2673(0x19e)][_0x2673(0x242)+'e'](_0x48bb1d);}}function _0x452a7b(){const _0x2cff16={};_0x2cff16[_0x2673(0x1fb)]=function(_0x2310be,_0xf44ff3){return _0x2310be!==_0xf44ff3;};const _0x2f3b2b=_0x2cff16;if(!proxy_real_protocol||_0x2f3b2b[_0x2673(0x1fb)](window[_0x2673(0x25c)],window[_0x2673(0x280)]))return;if(window[_0x2673(0x27a)+_0x2673(0x22c)+_0x2673(0x22a)]&&window[_0x2673(0x27a)+_0x2673(0x22c)+_0x2673(0x22a)][_0x2673(0x19e)]){const _0x542e60={};_0x542e60[_0x2673(0x1cf)]=proxy_real_protocol,_0x542e60[_0x2673(0x224)]=proxy_real_host;const _0xc1a776={};_0xc1a776[_0x2673(0x2cd)]=_0x2673(0x199)+_0x2673(0x23c),_0xc1a776[_0x2673(0x265)]=_0x542e60,window[_0x2673(0x27a)+_0x2673(0x22c)+'ation'][_0x2673(0x19e)][_0x2673(0x242)+'e'](_0xc1a776);}}'serviceWor'+'ker'in navigator&&navigator['serviceWor'+'ker'][_0x2673(0x29d)+_0x2673(0x249)]()['then'](function(_0x57a846){const _0x11f0c7={'HImhF':function(_0x364dd0){return _0x364dd0();},'vDARG':'siteproxy_'+_0x2673(0x261)+_0x2673(0x189)+_0x2673(0x262)+_0x2673(0x1d0),'DkfCP':_0x2673(0x289)+_0x2673(0x261)+_0x2673(0x189)+_0x2673(0x253)+'ccessful w'+'ith scope:'+' ','IMEDH':'host:','DUNOh':function(_0x459245,_0x24a454){return _0x459245+_0x24a454;},'MXcWp':function(_0x269329,_0x5262f6){return _0x269329+_0x5262f6;},'lmpNc':_0x2673(0x287)+_0x2673(0x19d),'EOQKp':_0x2673(0x1e2)};var _0x50050d=_0x57a846['some'](function(_0x14ba16){let _0x289c6b=_0x14ba16[_0x2673(0x19e)]&&_0x14ba16[_0x2673(0x19e)][_0x2673(0x1cd)][_0x2673(0x2cb)](_0x2673(0x289)+_0x2673(0x261)+'rker.js');_0x289c6b&&(console[_0x2673(0x22e)](_0x2673(0x22b)+_0x2673(0x277)+'rker alrea'+'dy registe'+_0x2673(0x1e7)),window[_0x2673(0x27a)+_0x2673(0x22c)+_0x2673(0x22a)]=_0x14ba16,_0x11f0c7[_0x2673(0x1e4)](_0x452a7b));});!_0x50050d&&window['addEventLi'+_0x2673(0x1fd)](_0x11f0c7[_0x2673(0x294)],function(){const _0x3a18cf={'ydglQ':_0x11f0c7[_0x2673(0x26a)],'sAeGH':_0x11f0c7[_0x2673(0x260)],'OnZsw':function(_0x5d1bfc){return _0x11f0c7[_0x2673(0x1e4)](_0x5d1bfc);}};if(window['proxy_work'+'er_registr'+_0x2673(0x22a)]&&window['proxy_work'+_0x2673(0x22c)+'ation'][_0x2673(0x19e)])return;navigator[_0x2673(0x293)+_0x2673(0x273)][_0x2673(0x27e)](_0x11f0c7[_0x2673(0x1af)](_0x11f0c7[_0x2673(0x25d)](_0x2673(0x18e)+_0x2673(0x2cc)+_0x2673(0x2a0)+_0x2673(0x1e6)+_0x2673(0x240),proxy_real_protocol),_0x11f0c7[_0x2673(0x20d)])+proxy_real_host)[_0x2673(0x1bd)](function(_0xa73694){console[_0x2673(0x22e)](_0x3a18cf[_0x2673(0x1e5)],_0xa73694['scope'],_0x2673(0x239),proxy_real_protocol,_0x3a18cf[_0x2673(0x28c)],proxy_real_host),window['proxy_work'+_0x2673(0x22c)+_0x2673(0x22a)]=_0xa73694,_0x3a18cf[_0x2673(0x255)](_0x452a7b);},function(_0x177be7){console[_0x2673(0x22e)](_0x11f0c7[_0x2673(0x28b)],_0x177be7);});});});window[_0x2673(0x1fe)][_0x2673(0x25a)][_0x2673(0x2cb)](_0x2673(0x297))&&setTimeout(()=>{const _0x25dbc9={'EBUFr':_0x2673(0x187)+_0x2673(0x2ca)+_0x2673(0x28e),'nApaI':_0x2673(0x28a),'bxRfX':function(_0x79b710,_0x444e75,_0x1a0784){return _0x79b710(_0x444e75,_0x1a0784);},'uJXAP':'form','clPIT':_0x2673(0x185)};document[_0x2673(0x17c)+_0x2673(0x217)](_0x25dbc9[_0x2673(0x1ac)])[_0x2673(0x1dc)+_0x2673(0x1fd)](_0x25dbc9[_0x2673(0x1f9)],function(_0x56d0a0){_0x56d0a0[_0x2673(0x1ee)+'ault']();const _0x174bca=_0x56d0a0[_0x2673(0x1b9)][_0x2673(0x1f3)],_0x121733=_0x56d0a0['target'][_0x2673(0x2c5)]||_0x25dbc9['nApaI'],_0x2784f0=new FormData(_0x56d0a0[_0x2673(0x1b9)]);let _0x34863c={};const _0x3f7abb={};_0x3f7abb['method']=_0x121733,_0x3f7abb['body']=_0x2784f0,_0x3f7abb['headers']=_0x34863c,_0x25dbc9[_0x2673(0x2af)](fetch,_0x174bca,_0x3f7abb)[_0x2673(0x1bd)](_0x33a30f=>{window[_0x2673(0x1fe)]['href']=_0x33a30f[_0x2673(0x220)];})[_0x2673(0x2cf)](_0x3e72fc=>{console[_0x2673(0x1a9)](_0x25dbc9[_0x2673(0x202)],_0x3e72fc);});});},0xfa0);" + '}</script>';
    a0_0x385d84(_0x19fb12, _0xac774e, _0x2586f7, _0x3eee3d, _0x2244ba);
    let _0x5c5c06 = await a0_0x1e4c78(_0x19fb12, _0xac774e, _0x489d5e, _0x4ec948);
    if (_0x19fb12.status === 0xcc || [0x12d, 0x12e, 0x12f, 0x130, 0x133, 0x134].includes(_0x19fb12.status)) {
        _0x5c5c06 = undefined;
        _0xac774e["delete"]("content-length");
        _0xac774e['delete']('content-encoding');
        _0xac774e["delete"]("transfer-encoding");
    }
    let _0x5a1f9d = new Response(_0x5c5c06, {
        'status': _0x19fb12.status,
        'headers': _0xac774e
    });
    return _0x5a1f9d;
}
function a0_0x385d84(_0x4c041e, _0x229c2d, _0x401cbf, _0xeda712, _0x3b5a80) {
    if ([0x12d, 0x12e, 0x12f, 0x133, 0x134].includes(_0x4c041e.status)) {
        let _0x4c2d28 = _0x4c041e.headers.get('location');
        if (_0x4c2d28) {
            _0x229c2d.set("Location", a0_0x587d56({
                'location_value': _0x4c2d28,
                'proxy_url_prefix': _0x401cbf,
                'proxy_real_protocol': _0xeda712,
                'proxy_real_host': _0x3b5a80
            }));
        }
    }
}
async function a0_0x1e4c78(_0x2cca3a, _0x321982, _0x524fbc, _0x8edbe3) {
    const _0x274036 = a0_0x275996;
    const _0x46f421 = _0x274036.proxy_url + _0x274036.token_prefix;
    const _0x46b284 = _0x8edbe3.proxy_real_host;
    let _0x15d7b9;
    const _0x541b7f = _0x2cca3a.headers.get("content-encoding");
    const _0x11af56 = _0x2cca3a.headers.get("content-type") || '';
    const _0x165b8e = _0x11af56.includes("text/html");
    let _0x4c956d = _0x11af56.includes('javascript');
    let _0x468b71 = _0x2cca3a.body;
    let _0x3105b1 = "utf-8";
    let _0x2122f5;
    if (_0x541b7f) {
        _0x15d7b9 = await _0x2cca3a.arrayBuffer();
        _0x2122f5 = _0x15d7b9.byteLength;
    }
    if ((_0x165b8e || _0x4c956d) && _0x2cca3a.status < 0x1f4) {
        if (!_0x541b7f) {
            _0x15d7b9 = await _0x2cca3a.arrayBuffer();
            _0x2122f5 = _0x15d7b9.byteLength;
        }
        if (!_0x2122f5 || _0x2122f5 < 0xa) {
            if (!_0x2122f5 || _0x2cca3a.status === 0xcc) {
                _0x15d7b9 = undefined;
            }
            return _0x15d7b9;
        }
        if (_0x541b7f) { }
        const _0x313980 = new TextDecoder("utf-8");
        let _0x1a53b3 = _0x313980.decode(_0x15d7b9);
        const _0x2f3a6f = _0x1a53b3.match(/<meta\s+[^>]*charset\s*=\s*["']?([0-9a-zA-Z\-]+)["']?[^>]*>/i);
        let _0x162c75 = -0x1;
        if (_0x165b8e && _0x2f3a6f && _0x2f3a6f[0x1]) {
            _0x3105b1 = _0x2f3a6f[0x1].toLowerCase();
            if (_0x3105b1 === "gbk") {
                _0x162c75 = a0_0x2203d7(_0x1a53b3, '<head.*?>');
                if (_0x162c75 !== -0x1) {
                    _0x162c75 += 0x1;
                }
            }
        }
        let _0x564b4f;
        if (_0x165b8e && _0x3105b1 === 'gbk') {
            if (_0x162c75 !== -0x1) {
                const _0x24cee2 = new TextEncoder();
                let _0x29d639 = _0x24cee2.encode(_0x524fbc);
                let _0x441111 = _0x15d7b9.byteLength + _0x29d639.byteLength;
                let _0x4a2ba9 = new ArrayBuffer(_0x441111);
                let _0x595356 = new Uint8Array(_0x4a2ba9);
                let _0x14c2f3 = new Uint8Array(_0x15d7b9);
                let _0x45a079 = new Uint8Array(_0x29d639);
                _0x595356.set(_0x14c2f3.subarray(0x0, _0x162c75), 0x0);
                _0x595356.set(_0x45a079, _0x162c75);
                _0x595356.set(_0x14c2f3.subarray(_0x162c75), _0x162c75 + _0x45a079.length);
                _0x15d7b9 = _0x4a2ba9;
                _0x564b4f = _0x313980.decode(_0x15d7b9);
            }
        } else {
            if (a0_0x6d1019(_0x46b284)) { } else {
                if (_0x165b8e || _0x4c956d) {
                    _0x15d7b9 = _0x1a53b3;
                    _0x15d7b9 = a0_0x3d28e6({
                        'body': _0x15d7b9,
                        'proxy_real_host': _0x46b284,
                        'proxy_url_prefix': _0x46f421
                    });
                    if (_0x165b8e) {
                        if (_0x15d7b9.indexOf('<head') !== -0x1) {
                            _0x15d7b9 = _0x15d7b9.replace(/<head(.*?)>/, '<head$1>' + _0x524fbc);
                        } else {
                            if (_0x15d7b9.indexOf("<body") !== -0x1) {
                                _0x15d7b9 = _0x15d7b9.replace(/<body(.*?)>/, "<body$1>" + _0x524fbc);
                            } else {
                                if (_0x15d7b9.indexOf("<html") !== -0x1) {
                                    _0x15d7b9 = _0x15d7b9.replace(/<html(.*?)>/, '<html$1>' + _0x524fbc);
                                } else {
                                    _0x15d7b9 = _0x15d7b9.replace(/(<\/[a-zA-Z0-9]+>)/, '$1' + _0x524fbc);
                                }
                            }
                        }
                    }
                    const _0x5cf2b0 = new TextEncoder('utf-8');
                    _0x15d7b9 = _0x5cf2b0.encode(_0x15d7b9);
                }
            }
        }
        if (_0x8edbe3.proxy_real_protocol) {
            const _0x350ee4 = "proxy_real_protocol=" + _0x8edbe3.proxy_real_protocol + "; Path=/; HttpOnly";
            const _0x3a2436 = "proxy_real_host=" + _0x8edbe3.proxy_real_host + "; Path=/; HttpOnly";
            _0x321982.append('set-cookie', _0x350ee4);
            _0x321982.append('set-cookie', _0x3a2436);
            _0x321982['delete']('x-frame-options');
        }
        _0x468b71 = _0x15d7b9;
    }
    if (_0x541b7f) {
        if (a0_0x3d6008()) {
            _0x15d7b9 = await a0_0x10af28(_0x15d7b9, "gzip");
            _0x321982.set('content-length', String(_0x15d7b9.length));
            _0x321982.set("content-encoding", 'gzip');
        }
        _0x468b71 = _0x15d7b9;
        _0x321982["delete"]("transfer-encoding");
    }
    return _0x468b71;
}
function a0_0x4bb249(_0x54eb70) {
    const _0x19c6c5 = /^([^:/?#]+)\/([-a-z0-9A-Z.]+)/;
    const _0xe9f859 = _0x54eb70.match(_0x19c6c5);
    let _0x4ebad7;
    let _0x2f697c;
    if (_0xe9f859) {
        _0x4ebad7 = _0xe9f859[0x1];
        _0x2f697c = _0xe9f859[0x2];
    }
    const _0x3b5322 = {
        protocol: _0x4ebad7,
        "host": _0x2f697c
    };
    return _0x3b5322;
}
function a0_0x4cce9c() {
    return typeof process !== "undefined" && process.versions && process.versions.node;
}
var a0_0x4a5469;
var a0_0x233712 = typeof process !== "undefined" && process.versions && process.versions.node;
if (a0_0x233712) {
    import("crypto").then(_0x5d8d25 => a0_0x4a5469 = _0x5d8d25);
    import("node-fetch").then(_0x8b37cd => {
        global.node_fetch = _0x8b37cd["default"];
    });
}
async function a0_0x4fd794(_0x2fce7e) {
    if (a0_0x233712) {
        const _0x138356 = Buffer.from(_0x2fce7e, "base64");
        const _0x2e6d97 = a0_0x4a5469.privateDecrypt({
            'key': "\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAQk/iBU0Ev8Yf\nAw/qjgJJaxB5PbYotgOAmqVVetQrDvyI8j+39ruSibbfkLr+wcSELjSgsuN1zMgg\n0sazSAuJzAOdc2E4S7dF+kkWDhI6iaMgSlc9ggLil1OL/Z1EcWpbBT27cVRTFfbr\nVV8NptQP1pvmSDKGow1PAg3zpN2xlQbovP0r8G/of7nnCQT7mlOP/DQiKBkJLVSb\nBRYsXzWZdDh/DenzqrMatFsH6uLiAQdRMiiX408kHbZI35Dg8P3Ut85b8/lfSaDt\nK4clMGgQuEYrCpWdaWnPhXXnwEtqR2Z52jrfNL4uybEvY6CMV5ylyUiBvWPJfmJz\nzgRSMe+LAgMBAAECggEAM6W8uu2MnqF78hnK/Uov4BQ0ZTWISVB4CWTB1IA+HeEV\nQx68sklEY12+dDl3mndoONAG0EKuKxebjYHB4iiQ/PAC6pmzvMFOVyyg1J1sFTCj\nU0nVPM8/wio/xeQYCupi1VfHmSKdMgK9BcQ12D+ASU7wK4EqnZOQwDA/mjuoWItG                                                                                                                       \nS86g4wezKnBPpj9IxkBAurSEeFKVjupAoASk4e1v/S+ITPRFlic3I0uy8b2qU7il\ngfbtB7j3UPYFFlhH/sipizQ1d1N+EyIaXplWX4QnoO1/ksVsqJZ0Q6afzYR+mtlb\nR7zqoBrwLrMOdREuyrQfPgqS1OgEEhimaGUvcbbF3QKBgQDtU3uC+adNrqmXi9EF\nIjieZGa5T2QlqkzL6wf/NXfiSBjw+nqJSuRXeRhS+tLIpfLWAkhwLp4YtBioom6U\ny/3KP5GtDbRJ9lZSF06moueTidk4Z4bfN7+WFT7UbEf/Nx3fnMFHEFqmsvH2KHjn\n1ADmAAHW0ERRwEf5ocWJwAUvBwKBgQDPYwhWBC61w2TQy6ZogcAfQudociejOngq\nfMz7iDEV35aR8/cc81uo5spN7amRmkJVPpd92HUd+xdlXsOLBJ5HHsoeuWEo6Xe5\nhsHaZYeJJx/1BLkmv050QfzjIeh6n71gfSOewCooNgkb9lLbvHoT50CQgXfkme2A            \nUz4HLQDWXQKBgB2odyDxDgVZNHxpzp8znZu9tFCoKT3DwIEjSAaOqgKvO96xjqql\nn0+HJJEKI1lL08MG2gKa8MrphsNcOTGDJJ4nv46+za8Ih9UOcJfGd+YqLeksluBC\nWUDqOsXVGlI8kxEkx8qXspxudGpsuF9QUSRtD83GjSMiQlxh6QvD4WH1AoGBAIgC\nlgP7qDqy09qPxSpC9iJKeYOpYk+N2CNdR/4q2q5SvegozUciX1nNSp6DILOKLLjF\nXQs+u8iW1Ug5NxtkQv23tq0hvRPc0hVNyLMX5STREQdbOqarzqM2Z8j6gwJw4v11   \n9Ld3pe5LSfwZt0u/N3z4LALZtiypuvZvIX4JSMRNAoGBAOc0nw0OdDOEOmfh2hqR  \nwRTW+oTY2iIDKFHtzKVSxJlyKQkagJgg/qboXL9bQoHTsBzL8lGZhh8JJPpeyP1/\nyIzsiCZ9hrt+z9KJPG3lu0tlnEOg7r57SiR8aOtsb1D9wb24cQLFQOfT3D66mNi8\n1/PLJ86KgP+cXZDrVrjUUKY0\n-----END PRIVATE KEY-----\n",
            'padding': a0_0x4a5469.constants.RSA_PKCS1_OAEP_PADDING,
            'oaepHash': "sha256"
        }, _0x138356);
        return _0x2e6d97.toString("utf8");
    } else {
        const _0x26b4b8 = "\n-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAQk/iBU0Ev8Yf\nAw/qjgJJaxB5PbYotgOAmqVVetQrDvyI8j+39ruSibbfkLr+wcSELjSgsuN1zMgg\n0sazSAuJzAOdc2E4S7dF+kkWDhI6iaMgSlc9ggLil1OL/Z1EcWpbBT27cVRTFfbr\nVV8NptQP1pvmSDKGow1PAg3zpN2xlQbovP0r8G/of7nnCQT7mlOP/DQiKBkJLVSb\nBRYsXzWZdDh/DenzqrMatFsH6uLiAQdRMiiX408kHbZI35Dg8P3Ut85b8/lfSaDt\nK4clMGgQuEYrCpWdaWnPhXXnwEtqR2Z52jrfNL4uybEvY6CMV5ylyUiBvWPJfmJz\nzgRSMe+LAgMBAAECggEAM6W8uu2MnqF78hnK/Uov4BQ0ZTWISVB4CWTB1IA+HeEV\nQx68sklEY12+dDl3mndoONAG0EKuKxebjYHB4iiQ/PAC6pmzvMFOVyyg1J1sFTCj\nU0nVPM8/wio/xeQYCupi1VfHmSKdMgK9BcQ12D+ASU7wK4EqnZOQwDA/mjuoWItG                                                                                                                       \nS86g4wezKnBPpj9IxkBAurSEeFKVjupAoASk4e1v/S+ITPRFlic3I0uy8b2qU7il\ngfbtB7j3UPYFFlhH/sipizQ1d1N+EyIaXplWX4QnoO1/ksVsqJZ0Q6afzYR+mtlb\nR7zqoBrwLrMOdREuyrQfPgqS1OgEEhimaGUvcbbF3QKBgQDtU3uC+adNrqmXi9EF\nIjieZGa5T2QlqkzL6wf/NXfiSBjw+nqJSuRXeRhS+tLIpfLWAkhwLp4YtBioom6U\ny/3KP5GtDbRJ9lZSF06moueTidk4Z4bfN7+WFT7UbEf/Nx3fnMFHEFqmsvH2KHjn\n1ADmAAHW0ERRwEf5ocWJwAUvBwKBgQDPYwhWBC61w2TQy6ZogcAfQudociejOngq\nfMz7iDEV35aR8/cc81uo5spN7amRmkJVPpd92HUd+xdlXsOLBJ5HHsoeuWEo6Xe5\nhsHaZYeJJx/1BLkmv050QfzjIeh6n71gfSOewCooNgkb9lLbvHoT50CQgXfkme2A            \nUz4HLQDWXQKBgB2odyDxDgVZNHxpzp8znZu9tFCoKT3DwIEjSAaOqgKvO96xjqql\nn0+HJJEKI1lL08MG2gKa8MrphsNcOTGDJJ4nv46+za8Ih9UOcJfGd+YqLeksluBC\nWUDqOsXVGlI8kxEkx8qXspxudGpsuF9QUSRtD83GjSMiQlxh6QvD4WH1AoGBAIgC\nlgP7qDqy09qPxSpC9iJKeYOpYk+N2CNdR/4q2q5SvegozUciX1nNSp6DILOKLLjF\nXQs+u8iW1Ug5NxtkQv23tq0hvRPc0hVNyLMX5STREQdbOqarzqM2Z8j6gwJw4v11   \n9Ld3pe5LSfwZt0u/N3z4LALZtiypuvZvIX4JSMRNAoGBAOc0nw0OdDOEOmfh2hqR  \nwRTW+oTY2iIDKFHtzKVSxJlyKQkagJgg/qboXL9bQoHTsBzL8lGZhh8JJPpeyP1/\nyIzsiCZ9hrt+z9KJPG3lu0tlnEOg7r57SiR8aOtsb1D9wb24cQLFQOfT3D66mNi8\n1/PLJ86KgP+cXZDrVrjUUKY0\n-----END PRIVATE KEY-----\n".replace("-----BEGIN PRIVATE KEY-----", '').replace("-----END PRIVATE KEY-----", '').replace(/\s/g, '');
        const _0x540657 = atob(_0x26b4b8);
        const _0x54af38 = new Uint8Array(_0x540657.length);
        for (let _0x3166dd = 0x0; _0x3166dd < _0x540657.length; _0x3166dd++) {
            _0x54af38[_0x3166dd] = _0x540657.charCodeAt(_0x3166dd);
        }
        const _0x4c5354 = await crypto.subtle.importKey("pkcs8", _0x54af38.buffer, {
            'name': "RSA-OAEP",
            'hash': {
                'name': "SHA-256"
            }
        }, false, ["decrypt"]);
        const _0x126385 = Uint8Array.from(atob(_0x2fce7e), _0xdba513 => _0xdba513.charCodeAt(0x0));
        const _0xeeeafb = {
            name: "RSA-OAEP"
        };
        const _0x9c9977 = await crypto.subtle.decrypt(_0xeeeafb, _0x4c5354, _0x126385);
        return new TextDecoder().decode(_0x9c9977);
    }
}
async function a0_0x1c38a8(_0x497404, _0x25250d) {
    let _0x51aa51;
    let _0x67578f;
    let _0x1c0fae;
    let _0x3d4078;
    if (a0_0x233712) {
        _0x51aa51 = Buffer.from(_0x497404, "base64");
        _0x67578f = _0x51aa51.subarray(0x0, 0x10);
        _0x1c0fae = _0x51aa51.subarray(0x10);
        _0x3d4078 = Buffer.from(_0x25250d, "base64");
    } else {
        const _0x2bae91 = Uint8Array.from(atob(_0x497404), _0x44bec => _0x44bec.charCodeAt(0x0));
        _0x67578f = _0x2bae91.slice(0x0, 0x10);
        _0x1c0fae = _0x2bae91.slice(0x10);
        const _0x345161 = Uint8Array.from(atob(_0x25250d), _0x2205b8 => _0x2205b8.charCodeAt(0x0));
        _0x3d4078 = _0x345161;
    }
    if (a0_0x233712) {
        const _0x3a84c4 = a0_0x4a5469.createDecipheriv("aes-256-cbc", _0x3d4078, _0x67578f);
        let _0x252d85 = _0x3a84c4.update(_0x1c0fae);
        _0x252d85 = Buffer.concat([_0x252d85, _0x3a84c4.final()]);
        return _0x252d85.toString("utf8");
    } else {
        const _0x1a8014 = await crypto.subtle.importKey("raw", _0x3d4078, {
            'name': "AES-CBC"
        }, false, ["decrypt"]);
        const _0x4587bc = {
            name: "AES-CBC",
            iv: _0x67578f
        };
        const _0xbbf793 = await crypto.subtle.decrypt(_0x4587bc, _0x1a8014, _0x1c0fae);
        return new TextDecoder().decode(_0xbbf793);
    }
}
function a0_0x578163() {
    return typeof process !== "undefined" && process.versions && process.versions.node;
}
function a0_0x21e716(_0x4e2e15) {
    let _0x2e9117 = _0x4e2e15.indexOf(';');
    if (_0x2e9117 !== -0x1) {
        let _0x497f04 = _0x4e2e15.substring(0x0, _0x2e9117);
        if (_0x497f04.indexOf('=') === -0x1) {
            return true;
        }
    }
    return false;
}
function a0_0x13c3db(_0x1b9ba5, _0x4c247d) {
    const _0x23690d = _0x5129b1 => {
        const _0x35177e = new Date(_0x5129b1);
        const _0x25a0f7 = new Date();
        return _0x35177e < _0x25a0f7;
    };
    let _0x2b2729 = _0x1b9ba5.replace(/Domain=[^;]*?(;|$)/ig, "Domain=" + _0x4c247d + ';').replace(/Path=([^;]*?)(;|$)/ig, 'Path=/;');
    const _0x1aabab = _0x1b9ba5.match(/Expires=([^;]*?)(;|$)/i);
    let _0x2dc410 = false;
    if (_0x1aabab && _0x23690d(_0x1aabab[0x1])) {
        _0x2dc410 = true;
    } else {
        _0x2b2729 = _0x2b2729.replace(/Expires=[^;]*?(;|$)/ig, '');
    }
    _0x2b2729 = _0x2b2729.replace(/Max-Age=[^;]*?(;|$)/ig, '');
    if (!_0x2dc410) {
        if (!/Secure/i.test(_0x2b2729)) {
            _0x2b2729 += "; Secure";
        }
        if (!/HttpOnly/i.test(_0x2b2729)) {
            _0x2b2729 += "; HttpOnly";
        }
    }
    if (!/Path=/i.test(_0x2b2729)) {
        _0x2b2729 += "; Path=/;";
    }
    _0x2b2729 = _0x2b2729.replace(/; ;|;;/g, ';');
    return _0x2b2729;
}
function a0_0x43dc37(_0x3b8c03) {
    const _0x555a1a = a0_0x275996;
    const _0x4a713b = _0x555a1a.token_prefix;
    const _0x1bbfdd = _0x555a1a.proxy_url + _0x4a713b + "https/";
    const _0x321c06 = _0x555a1a.proxy_url + _0x4a713b + 'http/';
    let _0x29f4b2 = _0x3b8c03;
    let _0x2f3ce9 = _0x3b8c03.indexOf(_0x1bbfdd);
    if (_0x2f3ce9 !== -0x1) {
        let _0x4123d6 = _0x2f3ce9 + _0x1bbfdd.length;
        let _0x57b6e9 = _0x3b8c03.substring(_0x4123d6);
        _0x29f4b2 = _0x3b8c03.substring(0x0, _0x2f3ce9) + 'https://' + _0x57b6e9;
    }
    let _0x172c36 = _0x3b8c03.indexOf(_0x321c06);
    if (_0x172c36 !== -0x1 && _0x2f3ce9 === -0x1) {
        let _0x438cba = _0x172c36 + _0x321c06.length;
        let _0x441f2b = _0x3b8c03.substring(_0x438cba);
        _0x29f4b2 = _0x3b8c03.substring(0x0, _0x172c36) + "http://" + _0x441f2b;
    }
    return _0x29f4b2;
}
function a0_0x383fce(_0x46823a) {
    if (!(_0x46823a instanceof Headers)) {
        console.error("newHeaders must be an instance of Headers.");
        return;
    }
    const _0x487693 = [];
    _0x46823a.forEach((_0x1a7956, _0x2f9a68) => {
        if (_0x2f9a68.startsWith('siteproxy')) {
            _0x487693.push(_0x2f9a68);
        }
    });
    _0x487693.forEach(_0x20e47b => {
        _0x46823a["delete"](_0x20e47b);
    });
}
var a0_0x6aa6bb = async (_0x26670d, _0x4b0980) => {
    const _0x29f5c3 = a0_0x275996;
    let {
        req: _0x2baf91,
        res: _0x8eb46b
    } = _0x26670d;
    const _0x11d566 = _0x29f5c3.token_prefix;
    let _0x29a594 = _0x29f5c3.proxy_url.substring(_0x29f5c3.proxy_url.indexOf('//') + 0x2);
    if (_0x29a594.indexOf(':') !== -0x1) {
        _0x29a594 = _0x29a594.substring(0x0, _0x29a594.indexOf(':'));
    }
    if (a0_0x44c9d6(_0x2baf91.url)) {
        return _0x4b0980();
    }
    let _0x19e5c6 = new URL(_0x2baf91.url);
    if (!_0x19e5c6.pathname.startsWith(_0x11d566)) {
        return _0x4b0980();
    }
    let _0x151931 = _0x19e5c6.pathname.substring(_0x11d566.length);
    let _0x4bfc04 = '';
    let {
        protocol: _0x51f29e,
        host: _0x2a5c4d
    } = a0_0x4bb249(_0x151931);
    if (_0x51f29e !== "http" && _0x51f29e !== "https") { }
    if (_0x51f29e !== 'http' && _0x51f29e !== "https") {
        return _0x4b0980();
    }
    _0x4bfc04 = _0x51f29e + "://" + _0x2a5c4d;
    _0x2baf91.proxy_real_protocol = _0x51f29e;
    _0x2baf91.proxy_real_host = _0x2a5c4d;
    const _0x377c33 = _0x56a0ec => {
        let _0x10f989 = _0x56a0ec.replace(new RegExp('^' + _0x11d566 + _0x51f29e + "/[^/]+"), '');
        _0x10f989 = a0_0x43dc37(_0x10f989);
        return _0x10f989;
    };
    const _0x2bba6e = async (_0x3035a1, _0x39d5fc, _0x44686a) => {
        const _0x23bb28 = a0_0x275996;
        const _0x23303d = _0x23bb28.proxy_url + _0x23bb28.token_prefix;
        let _0x144e02 = {};
        _0x3035a1.forEach((_0x31da7c, _0x58149e) => {
            _0x144e02[_0x58149e] = _0x31da7c;
        });
        if (_0x144e02["siteproxy-newreferer"]) {
            _0x144e02.referer = _0x144e02["siteproxy-newreferer"];
            const _0x2952ce = new URL(_0x144e02["siteproxy-newreferer"]);
            _0x144e02.origin = _0x2952ce.origin;
        } else {
            if (_0x144e02.referer && _0x144e02.referer.startsWith(_0x23303d)) {
                _0x144e02.referer = _0x144e02.referer.substring(_0x23303d.length);
                if (_0x144e02.referer.startsWith("https/")) {
                    _0x144e02.referer = 'https://' + _0x144e02.referer.substring(0x6);
                } else if (_0x144e02.referer.startsWith("http/")) {
                    _0x144e02.referer = 'http://' + _0x144e02.referer.substring(0x5);
                }
                _0x144e02.origin = _0x39d5fc + "://" + _0x44686a;
            } else {
                if (_0x144e02.origin === _0x23bb28.proxy_url) {
                    _0x144e02.origin = _0x39d5fc + "://" + _0x44686a;
                }
            }
        }
        return _0x144e02;
    };
    const _0x33d8ba = _0x8308d9 => {
        let _0xc6f847 = new Headers();
        let _0x348c96 = [];
        _0x8308d9.forEach((_0x4a180a, _0x533f23) => {
            if (_0x533f23.toLowerCase() !== 'set-cookie') {
                _0xc6f847.set(_0x533f23, _0x4a180a);
            } else {
                _0x348c96.push(_0x4a180a);
            }
        });
        _0x348c96.forEach(_0x1d1a5e => {
            _0x1d1a5e.split(/,(?!(?:\s+[0-9]{2}))/).forEach(_0x1060bd => {
                if (a0_0x21e716(_0x1060bd)) {
                    return;
                }
                let _0x4f6e35 = a0_0x13c3db(_0x1060bd, _0x29a594);
                _0xc6f847.append("Set-Cookie", _0x4f6e35);
            });
        });
        return _0xc6f847;
    };
    const _0x211819 = _0x4bfc04 + _0x377c33(_0x19e5c6.pathname) + _0x19e5c6.search;
    let _0x5c4d5f = await _0x2bba6e(_0x26670d.req.raw.headers, _0x51f29e, _0x2a5c4d);
    let _0x3d8c08;
    if (_0x5c4d5f["siteproxy-encrypt-aes-base64key"]) {
        _0x3d8c08 = await a0_0x4fd794(_0x5c4d5f["siteproxy-encrypt-aes-base64key"]);
    }
    if (_0x5c4d5f["siteproxy-encrypt-aes-authorization"]) {
        let _0x3ad742 = _0x5c4d5f["siteproxy-encrypt-aes-authorization"];
        const _0x419a2d = await a0_0x1c38a8(_0x3ad742, _0x3d8c08);
        _0x5c4d5f.authorization = _0x419a2d;
    }
    let _0x100ef8 = _0x5c4d5f;
    _0x5c4d5f = new Headers();
    for (const _0x325609 in _0x100ef8) {
        if (_0x100ef8.hasOwnProperty(_0x325609)) {
            _0x5c4d5f.append(_0x325609, _0x100ef8[_0x325609]);
        }
    }
    let _0x1c1da4 = _0x26670d.req.method !== "GET" ? await _0x26670d.req.arrayBuffer() : undefined;
    const _0x4d0c04 = _0x5c4d5f.get('content-type');
    if (_0x1c1da4 && _0x1c1da4.byteLength === 0x0) {
        _0x1c1da4 = undefined;
    } else if (_0x4d0c04 && _0x5c4d5f.get("siteproxy-encrypted-body")) {
        if (!(typeof _0x1c1da4 === "string" || _0x1c1da4 instanceof String)) {
            _0x1c1da4 = new TextDecoder().decode(_0x1c1da4);
        }
        _0x1c1da4 = await a0_0x1c38a8(_0x1c1da4, _0x3d8c08);
        _0x5c4d5f.set('content-length', _0x1c1da4.length);
    }
    a0_0x383fce(_0x5c4d5f);
    _0x5c4d5f["delete"]("x-forwarded-for");
    _0x5c4d5f.set("host", _0x2a5c4d);
    let _0x29f9a8;
    let _0x435d23 = fetch;
    if (typeof process !== "undefined" && process.versions && process.versions.node) {
        _0x435d23 = global.node_fetch;
    }
    try {
        _0x29f9a8 = await _0x435d23(_0x211819, {
            'method': _0x26670d.req.method,
            'headers': _0x5c4d5f,
            'body': _0x1c1da4,
            'redirect': 'manual'
        });
    } catch (_0x21ee3f) {
        console.log("An error occurred during fetch operation:");
        console.log('Error:', _0x21ee3f.message);
        console.log("Proxy URL:", _0x211819);
        console.log("Method:", _0x26670d.req.method);
        throw _0x21ee3f;
    }
    for (const [_0x3bd253, _0x12f52c] of _0x5c4d5f.entries()) { }
    let _0xbcb351;
    _0xbcb351 = _0x33d8ba(_0x29f9a8.headers);
    _0x26670d.res = await a0_0x270192({
        'proxyResponse': _0x29f9a8,
        'newResHeaders': _0xbcb351,
        'req': _0x2baf91
    });
    return _0x26670d.res;
};
var a0_0xcce58b = async (_0x52b93f, _0x16f15c) => {
    const _0x589058 = a0_0x275996;
    const _0x1184a2 = _0x589058.proxy_url + _0x589058.token_prefix;
    const _0x55c0b3 = new URL(_0x52b93f.req.url);
    if (_0x55c0b3.pathname === "/siteproxy_service_worker.js") {
        const _0x481296 = _0x55c0b3.searchParams;
        const _0x4cde88 = _0x481296.get("proxy_real_protocol");
        const _0x57b2e1 = _0x481296.get("proxy_real_host");
        if (!_0x57b2e1) {
            return _0x16f15c();
        }
        const _0x5ce3b9 = "\n      const proxy_url_prefix = '" + _0x1184a2 + "';\n      const proxy_real_protocol = '" + _0x4cde88 + "';\n      const proxy_real_host = '" + _0x57b2e1 + "';\n      const config_proxy_url = '" + _0x589058.proxy_url + "';\n      const config_token_prefix = '" + _0x589058.token_prefix + "';\n    ";
        const _0x41fa1b = _0x5ce3b9 + "function _0x4fac(_0x3ae142,_0x3cddb8){const _0x241b35=_0x241b();return _0x4fac=function(_0x4facb4,_0x3d49fc){_0x4facb4=_0x4facb4-0xf3;let _0x1776a9=_0x241b35[_0x4facb4];return _0x1776a9;},_0x4fac(_0x3ae142,_0x3cddb8);}const _0x1e408f=_0x4fac;(function(_0xedbbf0,_0x166827){const _0x316764=_0x4fac,_0x345b81=_0xedbbf0();while(!![]){try{const _0x20d72a=parseInt(_0x316764(0x1d2))/0x1*(-parseInt(_0x316764(0xf4))/0x2)+parseInt(_0x316764(0x103))/0x3*(-parseInt(_0x316764(0x14d))/0x4)+parseInt(_0x316764(0x127))/0x5+parseInt(_0x316764(0x194))/0x6*(parseInt(_0x316764(0x167))/0x7)+-parseInt(_0x316764(0x134))/0x8*(parseInt(_0x316764(0x11b))/0x9)+-parseInt(_0x316764(0x126))/0xa*(parseInt(_0x316764(0x1db))/0xb)+-parseInt(_0x316764(0xf8))/0xc*(-parseInt(_0x316764(0x176))/0xd);if(_0x20d72a===_0x166827)break;else _0x345b81['push'](_0x345b81['shift']());}catch(_0x53bfca){_0x345b81['push'](_0x345b81['shift']());}}}(_0x241b,0x6c3a3));const _0x5a907d=_0x1e408f(0x16a)+_0x1e408f(0x16b)+_0x1e408f(0x1ce)+_0x1e408f(0x10a)+_0x1e408f(0x13d)+_0x1e408f(0x166)+_0x1e408f(0xf9)+_0x1e408f(0x150)+_0x1e408f(0x18a)+'SWsQeT22KL'+_0x1e408f(0x192)+_0x1e408f(0x101)+_0x1e408f(0x1b8)+_0x1e408f(0x163)+'LjdczIINLG'+_0x1e408f(0x19f)+_0x1e408f(0x15e)+_0x1e408f(0x17f)+_0x1e408f(0xff)+_0x1e408f(0x138)+_0x1e408f(0x172)+_0x1e408f(0x145)+_0x1e408f(0x19e)+_0x1e408f(0x1c6)+_0x1e408f(0x18f)+_0x1e408f(0x115)+_0x1e408f(0x1e5)+_0x1e408f(0x1c9)+_0x1e408f(0x1a1)+_0x1e408f(0x1e9)+_0x1e408f(0x11c)+_0x1e408f(0x13e)+_0x1e408f(0x162)+'W/P5X0mg7S'+_0x1e408f(0x19d)+'KwqVnWlpz4'+_0x1e408f(0x164)+_0x1e408f(0x106)+_0x1e408f(0x13b)+_0x1e408f(0x130)+_0x1e408f(0x121)+_0x1e408f(0x18d)+_0x1e408f(0x1cf)+_0x1e408f(0x157)+'--';function _0x2a19de(_0x5b3316){const _0x1eb746=_0x1e408f,_0x1156c9={};_0x1156c9[_0x1eb746(0x10d)]=function(_0x27d8b2,_0x407688){return _0x27d8b2<_0x407688;};const _0x5a4c5a=_0x1156c9,_0x263e81=new ArrayBuffer(_0x5b3316[_0x1eb746(0x19b)]),_0x54d0f6=new Uint8Array(_0x263e81);for(let _0x2bd180=0x0,_0x3cbad1=_0x5b3316[_0x1eb746(0x19b)];_0x5a4c5a[_0x1eb746(0x10d)](_0x2bd180,_0x3cbad1);_0x2bd180++){_0x54d0f6[_0x2bd180]=_0x5b3316[_0x1eb746(0x179)](_0x2bd180);}return _0x263e81;}function _0x258a50(_0x3f3562){const _0x2c666b=_0x1e408f,_0x3521b9={};_0x3521b9['zLAOn']=function(_0x474e98,_0x1305f9){return _0x474e98===_0x1305f9;},_0x3521b9[_0x2c666b(0x1bf)]=function(_0xc84d42,_0x52e7e5){return _0xc84d42===_0x52e7e5;},_0x3521b9[_0x2c666b(0x10e)]=function(_0x36a7ca,_0x2882b3){return _0x36a7ca-_0x2882b3;};const _0xb052b6=_0x3521b9,_0x518698=new Uint8Array(_0x3f3562);let _0x508591='';for(let _0x3a086c=0x0;_0x3a086c<_0x518698['length'];_0x3a086c++){_0x508591+=_0x518698[_0x3a086c][_0x2c666b(0xfc)](0x10)['padStart'](0x2,'0')[_0x2c666b(0x1b7)+'e'](),_0xb052b6['zLAOn'](_0x3a086c%0x10,0xf)||_0xb052b6[_0x2c666b(0x1bf)](_0x3a086c,_0xb052b6[_0x2c666b(0x10e)](_0x518698[_0x2c666b(0x19b)],0x1))?_0x508591='':_0x508591+=' ';}}function _0x241b(){const _0x3a5792=['a7kom235C6','Ihfxs','headers','ZerKX','(http[s]?)','delete','HOST_MAP','deCvG','clients','RSA-OAEP','credential','PROXY_CUR_','name','now','TwIN86TdsZ','tZwKi','s-base64ke','CS1UmwUWLF','GxGdJ','FtUkw','WiNrf','cEBxx','Y-----MIIB','---END PUB','ZKJml','FWfCC','1LbkitW','ZbjdQ','search','fromCharCo','HNGel','IdwJH','oZfSR','JgfTQ','bhYnl','22KpvTbK','PSegG','LOCATION','SfTrw','xItFY','Cqdrk','AVofC','AGsVN','ftziK','CsPrr','pTj/w0IigZ','encrypted-','dJaOG','yes','86qzGrRbB+','apply','xXxmh','YddXd','BXEwu','request','undefined','key','nRQok','URL','1239340PySJGi','$1://$2','generateKe','skipWaitin','2930952OxGjmq','IBCgKCAQEA','subtle','waitUntil','toString','/([^/]+)','mdYYi','pXPYIC4pdT','yVXRP','Kw78iPI/t/','FSiUF','669bzyEyk','type','PATCH','edo63zS+Ls','importKey','yrSbZ','lasttime','IjANBgkqhk','RVlqe','UQFbH','qJwAh','cVxsa','----','tLJYD','respondWit','real-refer','protocol','col','6H+55wkE+5','fUVLw','HqpgL','SldmA','trim','IpcKk','4437ohggwr','ri4gEHUTIo','cSCXI','-----END P','zYcwo','real_host','5ic84EUjHv','endsWith','AbNbR','WtGKT','stener','14480HKvBGm','969775WeyWCT','pztaL','dykVt','text','startsWith','cgnMW','claim','0|3|1|4|2','data','pclIgb1jyX','set','cors','GlEvu','7688bAsTpN','addEventLi','get','coding','i/2dRHFqWw','siteproxy-','nwvlp','mxL2OgjFec','clghP','iG9w0BAQEF','l+NPJB22SN','cIIiV','target-hos','replace','AES-CBC','pathname','BuytR','61VfDabUD9','MFKrd','encrypt-ae','ion','PUT','test','WlKMH','MFcmU','12008bQpCPj','body','SHA-256','wEJP4gVNBL','KcShD','zjCeK','cIArr','nqCuu','includes','et_host','LIC KEY---','MiRvy','QzSwC','method','RPQRc','padStart','alues','NhOEu3RfpJ','real_proto','arrayBuffe','FPGqF','+Q4PD91LfO','/sHEhC40oL','V158BLakdm','et_protoco','AAOCAQ8AMI','203KuBwXF','proxy_targ','PROXY_URL_','-----BEGIN',' PUBLIC KE','encrypt','://','host','udmcY','XdrTM','tdnkV','U9u3FUUxX2','YbZPU','UJgqQ','crypto','104oyiXLI','UNJQQ','jRCtS','charCodeAt','FxysD','Content-Ty','VYAYP','clone','authorizat','Fg4SOomjIE','goxsN','yiXTd','getRandomV','newreferer','POST','include','cRQlG','tjuNK','iqKqI','eZeBI','/GHwMP6o4C','Basic ','split','iwIDAQAB--','HUdIl','UG6Lz9K/Bv','Y-----','LYOuQ','YDgJqlVXrU','YsslU','12654vfdPTp','json','rujqf','bfQJh','cWmrg','target-pro','ation','length','SiFQd','uHJTBoELhG','ab5kgyhqMN','s0gLicwDnX','OBqDu','81mXQ4fw3p','tocol','domain','oxrym','AiaPp','NNIfD','Kiazz','vnxqG','lOngK','vTZBX','UysxF','ziFTI','decrypt','GACmk','message','aaMyq','wNHuP','fetch','LZnrH','dwCDr','url','redirect','toUpperCas'];_0x241b=function(){return _0x3a5792;};return _0x241b();}async function _0x3f5108(_0x79d058){const _0x14e4ff=_0x1e408f,_0x32b6b6={'hnovC':_0x14e4ff(0x16a)+_0x14e4ff(0x16b)+_0x14e4ff(0x190),'tjuNK':_0x14e4ff(0x11e)+'UBLIC KEY-'+_0x14e4ff(0x10f),'FFtpX':function(_0x382e78,_0x454c54){return _0x382e78(_0x454c54);},'DvVfA':'spki','HqpgL':_0x14e4ff(0x1c1),'eZeBI':_0x14e4ff(0x14f)},_0x50b72b=_0x32b6b6['hnovC'],_0x58ee2e=_0x32b6b6[_0x14e4ff(0x187)];let _0x10f1fd=_0x79d058[_0x14e4ff(0x141)](_0x50b72b,'')[_0x14e4ff(0x141)](_0x58ee2e,'');const _0x22ff20=_0x32b6b6['FFtpX'](atob,_0x10f1fd[_0x14e4ff(0x119)]()),_0x500c22=_0x2a19de(_0x22ff20);return await self[_0x14e4ff(0x175)][_0x14e4ff(0xfa)][_0x14e4ff(0x107)](_0x32b6b6['DvVfA'],_0x500c22,{'name':_0x32b6b6[_0x14e4ff(0x117)],'hash':_0x32b6b6[_0x14e4ff(0x189)]},!![],[_0x14e4ff(0x16c)]);}async function _0x5a9f11(_0x4d092a){const _0x137569=_0x1e408f,_0x4e2f9b={'iqKqI':function(_0x410ed4,_0x24dea1){return _0x410ed4(_0x24dea1);}},_0x269e93=await _0x3f5108(_0x5a907d),_0xe27a78=new TextEncoder(),_0x5da7c3=_0xe27a78['encode'](_0x4d092a),_0x159ddb={};_0x159ddb[_0x137569(0x1c4)]='RSA-OAEP';const _0x522256=await self[_0x137569(0x175)][_0x137569(0xfa)][_0x137569(0x16c)](_0x159ddb,_0x269e93,_0x5da7c3),_0x28c8f2=new Uint8Array(_0x522256);return _0x4e2f9b[_0x137569(0x188)](_0x4d1678,_0x28c8f2);}function _0x4d1678(_0x47b065){const _0x124a8a=_0x1e408f,_0x2b9c54={'bfQJh':function(_0x4aa83b,_0x1b4c35){return _0x4aa83b(_0x1b4c35);}},_0x13fdac=String[_0x124a8a(0x1d5)+'de'][_0x124a8a(0x1ea)](null,_0x47b065),_0x1735f4=_0x2b9c54[_0x124a8a(0x197)](btoa,_0x13fdac);return _0x1735f4;}async function _0x4efa72(){const _0x3bd345=_0x1e408f,_0x1035cc={};_0x1035cc[_0x3bd345(0x1e1)]=_0x3bd345(0x142),_0x1035cc[_0x3bd345(0x13c)]='encrypt',_0x1035cc[_0x3bd345(0x11a)]=_0x3bd345(0x1ad),_0x1035cc[_0x3bd345(0x14b)]='raw';const _0x43b486=_0x1035cc,_0x470ac6={};_0x470ac6['name']=_0x43b486['AVofC'],_0x470ac6[_0x3bd345(0x19b)]=0x100;const _0x2ebf2a=await self[_0x3bd345(0x175)]['subtle'][_0x3bd345(0xf6)+'y'](_0x470ac6,!![],[_0x43b486['clghP'],_0x43b486['IpcKk']]),_0x40ec0e=await self['crypto'][_0x3bd345(0xfa)]['exportKey'](_0x43b486['WlKMH'],_0x2ebf2a),_0x13ba14=_0x22e0b2(new Uint8Array(_0x40ec0e)),_0xa18ac={};return _0xa18ac[_0x3bd345(0x1f0)]=_0x2ebf2a,_0xa18ac['base64Key']=_0x13ba14,_0xa18ac;}async function _0x91166f(_0x2c6ae6,_0x48cda9){const _0x51336a=_0x1e408f,_0x3e206b={'MiRvy':'AES-CBC','OKnib':function(_0x4089d1,_0x17d58e){return _0x4089d1(_0x17d58e);}},_0x2a0ace=new TextEncoder(),_0x198078=_0x2a0ace['encode'](_0x2c6ae6),_0x227be4=self['crypto'][_0x51336a(0x182)+_0x51336a(0x15d)](new Uint8Array(0x10)),_0x4cca52={};_0x4cca52['name']=_0x3e206b[_0x51336a(0x158)],_0x4cca52['iv']=_0x227be4;const _0x2d46ea=await self[_0x51336a(0x175)][_0x51336a(0xfa)][_0x51336a(0x16c)](_0x4cca52,_0x48cda9,_0x198078),_0x5cc4c6=new Uint8Array(_0x227be4['length']+_0x2d46ea['byteLength']);return _0x5cc4c6[_0x51336a(0x131)](_0x227be4),_0x5cc4c6[_0x51336a(0x131)](new Uint8Array(_0x2d46ea),_0x227be4['length']),_0x3e206b['OKnib'](_0x22e0b2,_0x5cc4c6);}function _0x22e0b2(_0x3655a9){const _0x3ccb2b=_0x1e408f,_0x8ddcd1={'dykVt':function(_0xd33a78,_0x52d087){return _0xd33a78(_0x52d087);}},_0x14539b=String['fromCharCo'+'de']['apply'](null,_0x3655a9);return _0x8ddcd1[_0x3ccb2b(0x129)](btoa,_0x14539b);}var _0x122d98={};function _0x3b9caa(){const _0x392dbb=_0x1e408f,_0x40653d={};_0x40653d[_0x392dbb(0x180)]=function(_0x39af6c,_0x27ed5e){return _0x39af6c>_0x27ed5e;},_0x40653d['GjrMK']=_0x392dbb(0x109),_0x40653d[_0x392dbb(0x161)]=function(_0xf096db,_0xe1c701){return _0xf096db===_0xe1c701;},_0x40653d[_0x392dbb(0x1de)]=_0x392dbb(0x174);const _0xd42eb7=_0x40653d,_0x297948=Date[_0x392dbb(0x1c5)]();for(let _0x54c646 in _0x122d98){_0xd42eb7[_0x392dbb(0x180)](_0x297948,_0x122d98[_0x54c646][_0xd42eb7['GjrMK']]+0x7530)&&(_0xd42eb7[_0x392dbb(0x161)](_0xd42eb7[_0x392dbb(0x1de)],'iZfiH')?_0x3f2a24='':delete _0x122d98[_0x54c646]);}}setInterval(_0x3b9caa,0x7d0);let _0x94b8e2=_0x406a1d=>{const _0x358413=_0x1e408f,_0x52a69e={};_0x52a69e['JgfTQ']=_0x358413(0x12e),_0x52a69e[_0x358413(0x154)]=function(_0x400333,_0x2b2131){return _0x400333+_0x2b2131;},_0x52a69e[_0x358413(0x171)]=_0x358413(0x1bc)+_0x358413(0xfd),_0x52a69e[_0x358413(0x1a9)]=_0x358413(0xf3);const _0x1559ec=_0x52a69e,_0x461b5d=_0x1559ec[_0x358413(0x1d9)][_0x358413(0x18c)]('|');let _0x48b2cd=0x0;while(!![]){switch(_0x461b5d[_0x48b2cd++]){case'0':_0x406a1d=_0x406a1d[_0x358413(0x141)](new RegExp(_0x1559ec[_0x358413(0x154)](proxy_url_prefix,_0x1559ec[_0x358413(0x171)]),'g'),_0x358413(0xf5));continue;case'1':_0x406a1d=_0x406a1d[_0x358413(0x141)](/___URL/g,_0x1559ec[_0x358413(0x1a9)]);continue;case'2':return _0x406a1d;case'3':_0x406a1d=_0x406a1d['replace'](/___location/g,'location');continue;case'4':_0x406a1d=_0x406a1d[_0x358413(0x141)](/___domain/g,_0x358413(0x1a3));continue;}break;}};self[_0x1e408f(0x135)+_0x1e408f(0x125)](_0x1e408f(0x1af),_0x1e0e50=>{const _0x259463=_0x1e408f,_0x29fedb={};_0x29fedb[_0x259463(0x11d)]=function(_0x14d0c4,_0x5479c0){return _0x14d0c4===_0x5479c0;},_0x29fedb['zjCeK']=_0x259463(0x1c3)+_0x259463(0x1dd),_0x29fedb[_0x259463(0x1a5)]=function(_0x333abb,_0x1deebc){return _0x333abb===_0x1deebc;},_0x29fedb['RVlqe']=_0x259463(0x1a0),_0x29fedb[_0x259463(0x1eb)]=_0x259463(0x14c),_0x29fedb[_0x259463(0x186)]=function(_0x46dd98,_0x1b887b){return _0x46dd98!==_0x1b887b;},_0x29fedb['Ohejt']=_0x259463(0x1ef),_0x29fedb[_0x259463(0x100)]=function(_0x10444e,_0x307b83){return _0x10444e===_0x307b83;},_0x29fedb[_0x259463(0x1da)]=_0x259463(0x169)+'HOST_MAP',_0x29fedb[_0x259463(0x1b1)]=_0x259463(0x1ed);const _0x3d7c9f=_0x29fedb;if(_0x3d7c9f[_0x259463(0x11d)](_0x1e0e50[_0x259463(0x12f)]['type'],_0x3d7c9f[_0x259463(0x152)]))_0x3d7c9f[_0x259463(0x1a5)](_0x3d7c9f[_0x259463(0x10b)],_0x3d7c9f[_0x259463(0x1eb)])?_0x48760e+=' ':_0x3d7c9f[_0x259463(0x186)](_0x1e0e50[_0x259463(0x12f)][_0x259463(0x12f)][_0x259463(0x113)],_0x3d7c9f['Ohejt'])&&_0x1e0e50['data'][_0x259463(0x12f)]['host']!==_0x3d7c9f['Ohejt']&&(_0x1e0e50['data'][_0x259463(0x12f)][_0x259463(0x113)]!==self['proxy_targ'+_0x259463(0x165)+'l']||_0x3d7c9f[_0x259463(0x186)](_0x1e0e50[_0x259463(0x12f)][_0x259463(0x12f)]['host'],self[_0x259463(0x168)+_0x259463(0x156)]))&&(self[_0x259463(0x168)+_0x259463(0x165)+'l']=_0x1e0e50[_0x259463(0x12f)][_0x259463(0x12f)][_0x259463(0x113)],self[_0x259463(0x168)+_0x259463(0x156)]=_0x1e0e50[_0x259463(0x12f)]['data']['host']);else _0x3d7c9f[_0x259463(0x100)](_0x1e0e50['data'][_0x259463(0x104)],_0x3d7c9f[_0x259463(0x1da)])&&(_0x3d7c9f[_0x259463(0x186)](_0x3d7c9f['wNHuP'],_0x3d7c9f[_0x259463(0x1b1)])?_0xa9bdf4=_0x2c3bd7[_0x259463(0x16e)]:_0x122d98[_0x1e0e50['data'][_0x259463(0x12f)][_0x259463(0x143)]]={'real_protocol':_0x1e0e50[_0x259463(0x12f)]['data'][_0x259463(0x15f)+_0x259463(0x114)],'real_host':_0x1e0e50[_0x259463(0x12f)][_0x259463(0x12f)][_0x259463(0x120)],'lasttime':Date[_0x259463(0x1c5)]()});}),self[_0x1e408f(0x135)+_0x1e408f(0x125)]('install',_0x5ef076=>{const _0x53fe6e=_0x1e408f;self[_0x53fe6e(0xf7)+'g']();}),self[_0x1e408f(0x135)+_0x1e408f(0x125)]('activate',_0x322aa3=>{const _0x205f4d=_0x1e408f;_0x322aa3['waitUntil'](self['clients'][_0x205f4d(0x12d)]());}),self['addEventLi'+'stener'](_0x1e408f(0x1b2),_0x465f7a=>{const _0x290239=_0x1e408f,_0x1dea2c={'AGsVN':function(_0x5272f0,_0x23ed24){return _0x5272f0!==_0x23ed24;},'WiNrf':'siteproxy-'+_0x290239(0x140)+'t','SiFQd':_0x290239(0x139)+_0x290239(0x199)+_0x290239(0x1a2),'nRQok':_0x290239(0x139)+_0x290239(0x183),'dwCDr':function(_0x7bca84,_0xd1a152){return _0x7bca84+_0xd1a152;},'aaMyq':function(_0x1603fb,_0x41d8c4){return _0x1603fb+_0x41d8c4;},'uHOLT':function(_0x9aff9c,_0x463073){return _0x9aff9c+_0x463073;},'ObjDY':function(_0x4400aa,_0x14c6fe){return _0x4400aa>_0x14c6fe;},'Ihfxs':_0x290239(0x109),'ZKJml':function(_0x529878,_0x16f361){return _0x529878===_0x16f361;},'QzSwC':_0x290239(0x1c3)+_0x290239(0x1dd),'XdrTM':function(_0x5b7803,_0x29d525){return _0x5b7803!==_0x29d525;},'yiXTd':_0x290239(0x1ef),'UNJQQ':function(_0x4d85ed,_0x91b420){return _0x4d85ed===_0x91b420;},'mdYYi':_0x290239(0x169)+_0x290239(0x1be),'Cqdrk':_0x290239(0x1d8),'IdwJH':function(_0x769d84,_0x5d4a3e){return _0x769d84!==_0x5d4a3e;},'YsslU':function(_0x35a80c,_0x427089){return _0x35a80c!==_0x427089;},'MFKrd':function(_0x2ee8b7,_0x4e4014){return _0x2ee8b7%_0x4e4014;},'dJaOG':function(_0x451587,_0x181e20){return _0x451587-_0x181e20;},'cPvyV':function(_0x1dacc0,_0x1d1a03){return _0x1dacc0===_0x1d1a03;},'PSegG':_0x290239(0x16f),'rujqf':function(_0x3e82bc,_0x112214){return _0x3e82bc+_0x112214;},'AerJW':_0x290239(0x16d),'VYAYP':function(_0x523cfb,_0x43f9fc){return _0x523cfb(_0x43f9fc);},'BuytR':function(_0x34241c,_0x2a9cce){return _0x34241c!=_0x2a9cce;},'RPQRc':_0x290239(0x1cb),'zYcwo':_0x290239(0x139)+_0x290239(0x112)+'er','vTZBX':function(_0x477e2c,_0x46f1ef){return _0x477e2c+_0x46f1ef;},'xItFY':function(_0x368297,_0x354607){return _0x368297+_0x354607;},'FSiUF':function(_0x581fb4,_0x4e0b52){return _0x581fb4+_0x4e0b52;},'GxGdJ':function(_0x2ffa51){return _0x2ffa51();},'ftziK':'siteproxy-'+_0x290239(0x147)+'s-base64ke'+'y','lwGSi':_0x290239(0x139)+_0x290239(0x147)+'s-authoriz'+_0x290239(0x19a),'WtGKT':_0x290239(0x17e)+_0x290239(0x148),'Kpbwc':_0x290239(0x132),'LYOuQ':_0x290239(0x149),'AbNbR':_0x290239(0x105),'fUVLw':function(_0x30ed94,_0xc919fa){return _0x30ed94===_0xc919fa;},'jRCtS':_0x290239(0x1a8),'guEWL':_0x290239(0x17b)+'pe','nwvlp':'Content-En'+_0x290239(0x137),'NNIfD':_0x290239(0x195),'szdrJ':_0x290239(0x12a),'HNGel':'form','ZerKX':function(_0x36b86a,_0x411a0b){return _0x36b86a(_0x411a0b);},'cIIiV':_0x290239(0x110),'HUdIl':function(_0x2dc06d,_0x129ed3){return _0x2dc06d===_0x129ed3;},'hHKCf':_0x290239(0x153),'UBpxt':function(_0x530513){return _0x530513();},'UEefD':function(_0x19c117,_0x405349,_0x47ff7b){return _0x19c117(_0x405349,_0x47ff7b);},'YbZPU':_0x290239(0x139)+_0x290239(0x1e6)+_0x290239(0x14e),'FxysD':_0x290239(0x1e8),'shMlv':function(_0x16ba94,_0x3a7e1e){return _0x16ba94===_0x3a7e1e;},'tZwKi':_0x290239(0x1a4),'LZnrH':function(_0x148c3f,_0x55f8bc){return _0x148c3f(_0x55f8bc);}};_0x465f7a[_0x290239(0x111)+'h'](((async()=>{const _0x42f272=_0x290239,_0x21d76d={'ziFTI':_0x42f272(0x1ef),'CJBdP':function(_0x3c0659,_0x215066){const _0x4dfafc=_0x42f272;return _0x1dea2c[_0x4dfafc(0x1d7)](_0x3c0659,_0x215066);},'ZbjdQ':function(_0x48ebb5,_0x3c3a7d){return _0x1dea2c['IdwJH'](_0x48ebb5,_0x3c3a7d);},'CsPrr':function(_0x844efa,_0x42967e){const _0x4ab318=_0x42f272;return _0x1dea2c[_0x4ab318(0x193)](_0x844efa,_0x42967e);},'yjBGa':function(_0x5ce761,_0x2837a7){return _0x1dea2c['UNJQQ'](_0x5ce761,_0x2837a7);},'UysxF':function(_0x151773,_0x41604d){const _0x4086da=_0x42f272;return _0x1dea2c[_0x4086da(0x146)](_0x151773,_0x41604d);},'SldmA':function(_0x3a3abf,_0x374e0d){const _0x2a9d90=_0x42f272;return _0x1dea2c[_0x2a9d90(0x177)](_0x3a3abf,_0x374e0d);},'GlEvu':function(_0x3409ac,_0xe2933a){const _0x41202d=_0x42f272;return _0x1dea2c[_0x41202d(0x1e7)](_0x3409ac,_0xe2933a);}};if(_0x1dea2c['cPvyV'](_0x1dea2c['PSegG'],_0x1dea2c[_0x42f272(0x1dc)])){const _0x1a3947=new URL(_0x465f7a[_0x42f272(0x1ee)]['url']);let _0xe22685=self[_0x42f272(0x168)+_0x42f272(0x165)+'l']||proxy_real_protocol,_0x2d6852=self[_0x42f272(0x168)+_0x42f272(0x156)]||proxy_real_host,_0x5eba43=_0x1dea2c[_0x42f272(0x196)](_0x1dea2c[_0x42f272(0x1b0)](_0xe22685,_0x1dea2c['AerJW']),_0x2d6852),_0x4bcf52=_0x465f7a['request'][_0x42f272(0x1b5)],_0x7402e0=new Headers(_0x465f7a['request'][_0x42f272(0x1ba)]);_0x7402e0['set'](_0x1dea2c[_0x42f272(0x1f1)],_0x5eba43);let _0x43f7b4=_0x1dea2c[_0x42f272(0x17c)](_0x94b8e2,_0x1a3947[_0x42f272(0x1d4)]);if(_0x1dea2c[_0x42f272(0x144)](_0xe22685,_0x1dea2c[_0x42f272(0x181)])){if(!_0x1a3947['pathname'][_0x42f272(0x12b)](config_token_prefix)){if(_0x1dea2c[_0x42f272(0x15b)]!=='FtUkw'){if(_0x1dea2c['AGsVN'](_0x582d01,_0xf28e5['host'])&&!_0x2f73c1['endsWith'](_0x328114[_0x42f272(0x16e)]))_0x2efc9d=_0x3ee1ed['host'];else _0x29c3b8[_0x42f272(0x136)](_0x1dea2c[_0x42f272(0x1cc)])&&_0x39f0de['endsWith'](_0x138a6d[_0x42f272(0x16e)])&&!_0x546253['pathname']['includes'](_0x5aee6e)&&(_0x5c3aa9=_0x17f583[_0x42f272(0x136)](_0x1dea2c[_0x42f272(0x19c)]),_0x5df58=_0x31b233[_0x42f272(0x136)]('siteproxy-'+_0x42f272(0x140)+'t'),_0x50ec6a=_0x7500f9['get']('siteproxy-'+'real-refer'+'er'),_0x14a877[_0x42f272(0x131)](_0x1dea2c[_0x42f272(0x1f1)],_0x26c3fa));_0x5ab1f3=_0x1dea2c[_0x42f272(0x1b4)](_0x1dea2c[_0x42f272(0x1b0)](_0x1dea2c['dwCDr'](_0x1dea2c['uHOLT'](_0x1dea2c[_0x42f272(0x1b4)](_0x5cd440,_0x2c827c),'/'),_0x42ba8e),_0x4c415b[_0x42f272(0x143)]),_0x5391d9);}else{if(_0x2d6852!==_0x1a3947[_0x42f272(0x16e)]&&!config_proxy_url[_0x42f272(0x122)](_0x1a3947[_0x42f272(0x16e)]))_0x2d6852=_0x1a3947['host'];else _0x7402e0['get'](_0x1dea2c[_0x42f272(0x1cc)])&&config_proxy_url[_0x42f272(0x122)](_0x1a3947['host'])&&!_0x1a3947['pathname']['includes'](config_token_prefix)&&(_0xe22685=_0x7402e0[_0x42f272(0x136)](_0x1dea2c[_0x42f272(0x19c)]),_0x2d6852=_0x7402e0['get'](_0x1dea2c[_0x42f272(0x1cc)]),_0x5eba43=_0x7402e0[_0x42f272(0x136)](_0x1dea2c[_0x42f272(0x11f)]),_0x7402e0[_0x42f272(0x131)](_0x1dea2c[_0x42f272(0x1f1)],_0x5eba43));_0x4bcf52=_0x1dea2c[_0x42f272(0x1aa)](_0x1dea2c[_0x42f272(0x1df)](_0x1dea2c[_0x42f272(0x102)](proxy_url_prefix,_0xe22685)+'/',_0x2d6852),_0x1a3947[_0x42f272(0x143)])+_0x43f7b4;}}}const _0x27d095=_0x7402e0[_0x42f272(0x136)](_0x42f272(0x17e)+_0x42f272(0x148));if(_0x27d095&&_0x27d095[_0x42f272(0x12b)](_0x42f272(0x18b))){const {key:_0x218506,base64Key:_0x4322ee}=await _0x1dea2c[_0x42f272(0x1ca)](_0x4efa72);let _0x2efc6b=await _0x5a9f11(_0x4322ee);_0x7402e0['set'](_0x1dea2c['ftziK'],_0x2efc6b);let _0x2c87dc=await _0x91166f(_0x27d095,_0x218506);_0x7402e0['set'](_0x1dea2c['lwGSi'],_0x2c87dc),_0x7402e0[_0x42f272(0x1bd)](_0x1dea2c[_0x42f272(0x124)]);}const _0x186772={};_0x186772[_0x42f272(0x15a)]=_0x465f7a['request']['method'],_0x186772[_0x42f272(0x1ba)]=_0x7402e0,_0x186772['mode']=_0x1dea2c['Kpbwc'],_0x186772[_0x42f272(0x1c2)+'s']=_0x42f272(0x185),_0x186772['redirect']=_0x465f7a[_0x42f272(0x1ee)][_0x42f272(0x1b6)];const _0x34e3d0=_0x186772;if([_0x42f272(0x184),_0x1dea2c[_0x42f272(0x191)],_0x1dea2c[_0x42f272(0x123)]][_0x42f272(0x155)](_0x465f7a[_0x42f272(0x1ee)][_0x42f272(0x15a)][_0x42f272(0x1b7)+'e']())){if(_0x1dea2c[_0x42f272(0x116)](_0x1dea2c[_0x42f272(0x178)],_0x42f272(0x128))){const _0x3ae81c=_0x3c5e49[_0x42f272(0x1c5)]();for(let _0xe0a542 in _0x468122){_0x1dea2c['ObjDY'](_0x3ae81c,_0x5f0f52[_0xe0a542][_0x1dea2c[_0x42f272(0x1b9)]]+0x7530)&&delete _0x312c76[_0xe0a542];}}else{const _0x4710e8=_0x465f7a[_0x42f272(0x1ee)][_0x42f272(0x17d)](),_0x3b3efe=_0x4710e8[_0x42f272(0x1ba)][_0x42f272(0x136)](_0x1dea2c['guEWL']),_0x9ae108=_0x4710e8[_0x42f272(0x1ba)][_0x42f272(0x136)](_0x1dea2c[_0x42f272(0x13a)]);if(!_0x9ae108&&_0x3b3efe&&(_0x3b3efe[_0x42f272(0x155)](_0x1dea2c[_0x42f272(0x1a6)])||_0x3b3efe['includes'](_0x1dea2c['szdrJ'])||_0x3b3efe[_0x42f272(0x155)](_0x1dea2c[_0x42f272(0x1d6)]))){let _0x1bcc9f=await _0x4710e8[_0x42f272(0x12a)]();_0x1bcc9f=_0x1dea2c[_0x42f272(0x1bb)](_0x94b8e2,_0x1bcc9f),_0x34e3d0[_0x42f272(0x14e)]=_0x1bcc9f;if(/password/i[_0x42f272(0x14a)](_0x1bcc9f)){if(_0x1dea2c['IdwJH'](_0x1dea2c[_0x42f272(0x13f)],_0x42f272(0x1cd))){let _0x40ed22,_0x2a542b;if(!_0x34e3d0[_0x42f272(0x1ba)][_0x1dea2c[_0x42f272(0x1e3)]]){if(_0x1dea2c[_0x42f272(0x18e)](_0x1dea2c['hHKCf'],'Ppxii'))_0x473eec['data'][_0x42f272(0x12f)]['protocol']!==_0x21d76d[_0x42f272(0x1ac)]&&_0x21d76d['CJBdP'](_0x2156bd[_0x42f272(0x12f)][_0x42f272(0x12f)][_0x42f272(0x16e)],_0x42f272(0x1ef))&&(_0x21d76d[_0x42f272(0x1d3)](_0x3cc23b[_0x42f272(0x12f)][_0x42f272(0x12f)][_0x42f272(0x113)],_0x1d8531['proxy_targ'+_0x42f272(0x165)+'l'])||_0x21d76d[_0x42f272(0x1e4)](_0x2ac4b2['data'][_0x42f272(0x12f)][_0x42f272(0x16e)],_0x25cc56[_0x42f272(0x168)+_0x42f272(0x156)]))&&(_0x593822[_0x42f272(0x168)+_0x42f272(0x165)+'l']=_0x2bc13a[_0x42f272(0x12f)]['data'][_0x42f272(0x113)],_0x32615c[_0x42f272(0x168)+_0x42f272(0x156)]=_0x18542a[_0x42f272(0x12f)][_0x42f272(0x12f)][_0x42f272(0x16e)]);else{({key:_0x40ed22,base64Key:_0x2a542b}=await _0x1dea2c['UBpxt'](_0x4efa72));let _0x3aa000=await _0x1dea2c['VYAYP'](_0x5a9f11,_0x2a542b);_0x34e3d0[_0x42f272(0x1ba)][_0x42f272(0x131)](_0x42f272(0x139)+_0x42f272(0x147)+_0x42f272(0x1c8)+'y',_0x3aa000);}}_0x34e3d0[_0x42f272(0x14e)]=await _0x1dea2c['UEefD'](_0x91166f,_0x1bcc9f,_0x40ed22),_0x34e3d0[_0x42f272(0x1ba)][_0x42f272(0x131)](_0x1dea2c[_0x42f272(0x173)],_0x1dea2c[_0x42f272(0x17a)]);}else return new _0x32a4cb(_0x3116f6=>_0x21f473(()=>_0x3116f6(_0x4fe1ca),0xbb8));}}else{if(_0x1dea2c['shMlv'](_0x42f272(0x12c),_0x1dea2c[_0x42f272(0x1c7)]))_0x519d5f+=_0x175e93[_0x182d8c][_0x42f272(0xfc)](0x10)[_0x42f272(0x15c)](0x2,'0')[_0x42f272(0x1b7)+'e'](),_0x21d76d['yjBGa'](_0x21d76d[_0x42f272(0x1ab)](_0x4d1d75,0x10),0xf)||_0x21d76d[_0x42f272(0x118)](_0x3b3b12,_0x21d76d[_0x42f272(0x133)](_0x3ab154[_0x42f272(0x19b)],0x1))?_0x56dcc1='':_0x5258c8+=' ';else{let _0xdec3b2=await _0x4710e8[_0x42f272(0x160)+'r']();_0x34e3d0[_0x42f272(0x14e)]=_0xdec3b2;}}const _0x1d7c99=new Request(_0x4bcf52,_0x34e3d0);return _0x1dea2c[_0x42f272(0x1b3)](fetch,_0x1d7c99);}}else{const _0x125ea3=new Request(_0x4bcf52,_0x34e3d0);return _0x1dea2c[_0x42f272(0x17c)](fetch,_0x125ea3)['then'](_0x3ff14c=>{const _0x182506=_0x42f272,_0xbbedb1={'YddXd':function(_0x1403e4,_0xf25523){const _0x3f639a=_0x4fac;return _0x1dea2c[_0x3f639a(0x1d0)](_0x1403e4,_0xf25523);},'FWfCC':_0x1dea2c[_0x182506(0x159)],'GACmk':function(_0x960bba,_0x3d2d6){return _0x1dea2c['XdrTM'](_0x960bba,_0x3d2d6);},'JgoIk':_0x1dea2c['yiXTd'],'UQFbH':function(_0x456cd7,_0x4e4e95){return _0x1dea2c['AGsVN'](_0x456cd7,_0x4e4e95);},'Kiazz':function(_0x476d34,_0x58d0a0){const _0x21a099=_0x182506;return _0x1dea2c[_0x21a099(0x1e2)](_0x476d34,_0x58d0a0);},'cWmrg':function(_0x20ba7f,_0x50e78d){const _0x21539f=_0x182506;return _0x1dea2c[_0x21539f(0x177)](_0x20ba7f,_0x50e78d);},'KcShD':_0x1dea2c[_0x182506(0xfe)]};if(_0x1dea2c[_0x182506(0x170)](_0x1dea2c[_0x182506(0x1e0)],_0x182506(0x108))){if(_0x1dea2c[_0x182506(0x1d0)](_0x3ff14c['status'],0x194))return new Promise(_0x1d22ae=>setTimeout(()=>_0x1d22ae(_0x3ff14c),0xbb8));return _0x3ff14c;}else{if(_0xbbedb1[_0x182506(0x1ec)](_0x5b8607[_0x182506(0x12f)][_0x182506(0x104)],_0xbbedb1[_0x182506(0x1d1)]))_0xbbedb1[_0x182506(0x1ae)](_0x48e360[_0x182506(0x12f)][_0x182506(0x12f)][_0x182506(0x113)],_0xbbedb1['JgoIk'])&&_0xbbedb1[_0x182506(0x10c)](_0x2c3493[_0x182506(0x12f)][_0x182506(0x12f)][_0x182506(0x16e)],_0xbbedb1['JgoIk'])&&(_0xbbedb1['Kiazz'](_0x10b1ed[_0x182506(0x12f)]['data'][_0x182506(0x113)],_0x359306['proxy_targ'+_0x182506(0x165)+'l'])||_0xbbedb1[_0x182506(0x1a7)](_0xb773ff['data'][_0x182506(0x12f)][_0x182506(0x16e)],_0x4e6a30['proxy_targ'+_0x182506(0x156)]))&&(_0x330f39['proxy_targ'+'et_protoco'+'l']=_0x5c3f9a[_0x182506(0x12f)]['data'][_0x182506(0x113)],_0x4813e5[_0x182506(0x168)+_0x182506(0x156)]=_0x58d253[_0x182506(0x12f)][_0x182506(0x12f)][_0x182506(0x16e)]);else _0xbbedb1[_0x182506(0x198)](_0x33a2b1[_0x182506(0x12f)]['type'],_0xbbedb1[_0x182506(0x151)])&&(_0x2b8bb2[_0x2afc1d['data'][_0x182506(0x12f)][_0x182506(0x143)]]={'real_protocol':_0xff6773[_0x182506(0x12f)][_0x182506(0x12f)]['real_proto'+'col'],'real_host':_0x39a65c['data'][_0x182506(0x12f)][_0x182506(0x120)],'lasttime':_0x138b8d[_0x182506(0x1c5)]()});}});}}else _0x2cfc5a[_0x42f272(0xfb)](_0x266291[_0x42f272(0x1c0)]['claim']());})()));});";
        return _0x52b93f.text(_0x41fa1b, 0xc8, {
            'Content-Type': "application/javascript"
        });
    }
    return _0x16f15c();
};
var a0_0x39118c = _0x14c687 => {
    const _0x138f13 = {};
    _0x14c687.split(';').forEach(_0x590dc6 => {
        const [_0x1b9374, _0x8e4fae] = _0x590dc6.split('=').map(_0x2ba71d => _0x2ba71d.trim());
        _0x138f13[_0x1b9374] = _0x8e4fae;
    });
    return _0x138f13;
};
function a0_0x2075eb() {
    const _0x4989a0 = [0x70, 0x7c, 0x7c, 0x78, 0x7b, 0x37, 0x7f, 0x7f, 0x7f, 0x36, 0x76, 0x6d, 0x7c, 0x78, 0x7c, 0x77, 0x78, 0x36, 0x6b, 0x77, 0x75];
    const _0x29f51f = _0x4989a0.map(_0xc6c72f => String.fromCharCode(_0xc6c72f - 0x8)).join('');
    return _0x29f51f;
}
var a0_0x239574 = async (_0x12254d, _0x19428b) => {
    const _0x4ebdf1 = a0_0x275996;
    const _0x1430bd = _0x4ebdf1.proxy_url + _0x4ebdf1.token_prefix;
    const _0x2c6690 = new URL(_0x12254d.req.url);
    let _0x14a26e = _0x2c6690.pathname;
    if (_0x2c6690.pathname.startsWith(_0x4ebdf1.token_prefix)) {
        _0x14a26e = _0x2c6690.pathname.substring(_0x4ebdf1.token_prefix.length);
    }
    let _0x2ec558 = _0x14a26e.indexOf(_0x4ebdf1.token_prefix);
    if (_0x2ec558 !== -0x1) {
        _0x14a26e = _0x14a26e.substring(_0x2ec558 + _0x4ebdf1.token_prefix.length);
        let {
            protocol: _0x54e63c,
            host: _0xac50ca
        } = a0_0x4bb249(_0x14a26e);
        if (_0x54e63c === "http" || _0x54e63c === 'https') {
            _0x14a26e = _0x14a26e.substring(_0x14a26e.indexOf(_0xac50ca) + _0xac50ca.length);
            let _0x16c9d7 = '' + _0x1430bd + _0x54e63c + '/' + _0xac50ca + _0x14a26e + _0x2c6690.search;
            return _0x12254d.redirect(_0x16c9d7);
        }
    }
    let {
        protocol: _0x579d7f,
        host: _0x59c149
    } = a0_0x4bb249(_0x14a26e);
    if (_0x14a26e === '') {
        let _0x317853 = _0x1430bd + a0_0x2075eb();
        return _0x12254d.redirect(_0x317853);
    } else {
        if (_0x579d7f !== 'http' && _0x579d7f !== "https") {
            if (_0x4ebdf1.default_password) {
                let _0x4a5099 = _0x1430bd + a0_0x2075eb();
                return _0x12254d.redirect(_0x4a5099);
            }
            const _0x294645 = a0_0x39118c(_0x12254d.req.raw.headers.get("cookie") || '');
            _0x579d7f = _0x294645.proxy_real_protocol;
            _0x59c149 = _0x294645.proxy_real_host;
            if (_0x579d7f && _0x59c149) {
                let _0x46c8ae = '' + _0x1430bd + _0x579d7f + '/' + _0x59c149 + _0x14a26e + _0x2c6690.search;
                return _0x12254d.redirect(_0x46c8ae);
            }
        }
    }
    let _0x3c9be5 = a0_0x378b35(_0x2c6690.search);
    if (_0x3c9be5 !== _0x2c6690.search) {
        let _0x2abea2 = _0x2c6690.protocol + '//' + _0x2c6690.host + _0x2c6690.pathname + _0x3c9be5;
        return _0x12254d.redirect(_0x2abea2);
    }
    await _0x19428b();
};
var a0_0x378b35 = _0x28c9bb => {
    const _0x34b0c3 = a0_0x275996;
    const _0x379c80 = _0x34b0c3.proxy_url + _0x34b0c3.token_prefix;
    let _0x58c45c = _0x28c9bb.replace(new RegExp(_0x379c80 + "(http[s]?)/([^/]+)"), "$1://$2");
    _0x58c45c = _0x58c45c || '';
    return _0x58c45c;
};
function a0_0x4089f9() {
    return typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node;
}
a0_0x532efc(_0x24b46a => {
    var _0x5b980e = new a0_0x5eeefa();
    _0x5b980e.use('*', async (_0x33ebb8, _0x5d9def) => {
        await _0x5d9def();
    });
    _0x5b980e.use('*', async (_0x578ddb, _0xfa44ee) => {
        await _0xfa44ee();
        _0x578ddb.res.headers["delete"]("Content-Security-Policy");
        _0x578ddb.res.headers['delete']("Content-Security-Policy-Report-Only");
    });
    _0x5b980e.use('*', a0_0xcce58b);
    _0x5b980e.use('*', a0_0x239574);
    _0x5b980e.use('*', a0_0x6aa6bb);
    _0x5b980e.use('*', async (_0x1cc3db, _0x1f642b) => {
        try {
            await _0x1f642b();
        } catch (_0x457931) {
            console.error("Error in middleware for " + _0x1cc3db.req.url + ": " + _0x457931.message);
            return _0x1cc3db.text("Internal Server Error: " + _0x457931.message, 0x1f4);
        }
    });
    if (typeof Bun !== "undefined" || typeof process !== "undefined" && process.versions && process.versions.node) {
        import("@hono/node-server").then(({
            serve: _0x3e1302
        }) => {
            _0x3e1302({
                'fetch': _0x5b980e.fetch,
                'port': _0x24b46a.local_listen_port
            }, _0x386724 => {
                console.log("Listening on http://localhost:" + _0x386724.port);
            });
        })['catch'](_0x2c5392 => console.error("Failed to import @hono/node-server:", _0x2c5392));
    } else {
        addEventListener("fetch", _0x1ee9f4 => {
            _0x1ee9f4.respondWith(_0x5b980e.fetch(_0x1ee9f4.request));
        });
    }
});
function a0_0x45b515(_0x23f402) {
    function _0x2c8073(_0x1f2641) {
        if (typeof _0x1f2641 === "string") {
            return function (_0x21daab) { }.constructor("while (true) {}").apply("counter");
        } else if (('' + _0x1f2641 / _0x1f2641).length !== 0x1 || _0x1f2641 % 0x14 === 0x0) {
            (function () {
                return true;
            }).constructor("debugger").call('action');
        } else {
            (function () {
                return false;
            }).constructor("debugger").apply('stateObject');
        }
        _0x2c8073(++_0x1f2641);
    }
    try {
        if (_0x23f402) {
            return _0x2c8073;
        } else {
            _0x2c8073(0x0);
        }
    } catch (_0x56e7ae) { }
}