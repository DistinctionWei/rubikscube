/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/vueapp/playground/index.html":
/*!******************************************!*\
  !*** ./src/vueapp/playground/index.html ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<v-app>\n    <div v-resize=\"resize\" style=\"user-select: none; touch-action: none;\">\n        <v-flex xs12 :style=\"{\n                'height':size + 'px'\n            }\" id=\"top-flex\"></v-flex>\n\n        <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\" :style=\"{\n        width: size * 0.9 + 'px', \n        height: size * 0.9 + 'px', \n        'margin-right': width / 2 - Math.min(size * 4, width / 2) + size * 1.1 + 'px'}\" @click=\"listd=!listd\">\n            <v-icon :size=\"size * 0.6\">\n                school\n            </v-icon>\n        </v-btn>\n\n        <v-btn fixed left top text color=\"primary\" style=\"user-select: none; margin: 0%; padding: 0%;\"\n            :style=\"{height: size+'px', 'margin-left': width / 2 - Math.min(size * 4, width / 2 - size / 4) + 'px'}\"\n            @click=\"listd=true\" v-if=\"isDemoMode\">\n            <div :style=\"{'font-size':(size * 0.4)+'px'}\" style=\"text-transform: none;\">{{ demoName }}</div>\n        </v-btn>\n\n        <v-bottom-sheet v-model=\"listd\">\n            <v-card text style=\"margin: 0%; padding: 0%;\">\n                <v-container fluid grid-list-md text-xs-center style=\"padding: 0%;\"\n                    :style=\"{width: Math.min(size * 10, width) + 'px'}\">\n                    <v-layout row wrap\n                        style=\"margin: 0%; padding: 0%; min-width: 0%; min-height: 0%; align-items: stretch;\">\n                        <v-card style=\"margin: 0%; padding: 0%;\" :style=\"{'width': demoGridWidth  + 'px'}\"\n                            v-for=\"(demoImage, i) in demoImages\" :key=\"i\">\n                            <v-btn block text color=\"primary\" :style=\"{\n                                'font-size': size * 0.3 + 'px',\n                                'height': size * 0.35 + 'px'\n                            }\" style=\"text-transform: none;\n                            text-align: center;\n                            margin: 0%;\n                            padding: 0%;\" @click=\"selectDemo(i)\">\n                                {{ demoData[i].name }}\n                            </v-btn>\n                            <img :src=\"demoImage\" style=\"margin: 0%; padding: 0%;\"\n                                :style=\"{'width':demoGridWidth  + 'px'}\" @click=\"selectDemo(i)\">\n                        </v-card>\n                    </v-layout>\n                </v-container>\n            </v-card>\n        </v-bottom-sheet>\n\n        <setting ref=\"setting\"></setting>\n        <viewport ref=\"viewport\"></viewport>\n        <v-flex xs12 :style=\"{\n                'height':size + 'px',\n                'padding': 'none',\n                'margin': 'none'\n            }\" id=\"bottom-flex\" v-show=\"!isPlayerMode\">\n        </v-flex>\n        <v-card flat style=\"margin: auto; touch-action: none; user-select: none;\">\n            <v-container fluid grid-list-md text-xs-center\n                :style=\"{width: Math.min(size * 8, width) + 'px', height: size * 4 + 'px'}\">\n                <v-layout row wrap>\n                    <v-flex xs12 :style=\"{\n                    'height': size + 'px'\n                }\" v-if=\"isPlayerMode\">\n                        <v-slider :value=\"progress\" style=\"margin: 0%; padding: 0%;\" :max=\"solution.length\"\n                            :tick-size=\"3\" thumb-label=\"always\" ticks=\"always\" hide-details v-on:input=\"setProgress\">\n                            <template v-slot:thumb-label>\n                                {{ progress == 0 ? '#' : solution[progress - 1] }}\n                            </template>\n                        </v-slider>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\">\n                        <v-btn @click=\"greenButton\" block text color=\"green\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ !isPlayerMode ? 'Scramble' : (progress == solution.length ? 'Replay' : 'Play') }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\">\n                        <v-btn @click=\"blueButton\" block text color=\"blue\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ !isPlayerMode ? 'Reset' : 'Pause' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                    <v-flex xs4 :style=\"{padding: size * 0.06 + 'px'}\">\n                        <v-btn @click=\"redButton\" block text color=\"red\"\n                            style=\"min-width: 0%; min-height: 0%; margin: 0%; padding: 0%;\" :height=\"size\">\n                            <div :style=\"{'font-size': size * 0.3 +'px'}\">\n                                {{ !isPlayerMode ? 'Solve' : 'Quit' }}\n                            </div>\n                        </v-btn>\n                    </v-flex>\n                </v-layout>\n            </v-container>\n        </v-card>\n    </div>\n</v-app>"

/***/ }),

/***/ "./src/vueapp/setting/index.html":
/*!***************************************!*\
  !*** ./src/vueapp/setting/index.html ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<div v-resize=\"resize\">\n    <v-btn fixed right top fab color=\"primary\" style=\"user-select: none;\"\n        :style=\"{width: size * 0.9 + 'px', height: size * 0.9 + 'px', 'margin-right': width / 2 - Math.min(size * 4, width / 2) + 'px'}\"\n        @click=\"state = !state\">\n        <v-icon :size=\"size * 0.6\">\n            settings\n        </v-icon>\n    </v-btn>\n    <v-bottom-sheet v-model=\"state\">\n        <v-card text style=\"margin: auto;\">\n            <v-container fluid grid-list-md text-xs-center :style=\"{width: Math.min(size * 8, width) + 'px'}\">\n                <v-subheader>\n                    SOLVING ALGORITHM\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                }\">\n                    <v-radio-group v-model=\"solver_id\">\n                        <v-radio label=\"Layer By Layer Method\" :value=\"0\" off-icon=\"radio_button_unchecked\" on-icon=\"radio_button_checked\"></v-radio>\n                        <v-radio label=\"Kociemba's Algorithm\" :value=\"1\" off-icon=\"radio_button_unchecked\"  on-icon=\"radio_button_checked\" :style=\"{ 'margin-top' : size * 0.2 + 'px'}\"></v-radio>\n                    </v-radio-group>\n                </v-flex>\n                <v-subheader>\n                    SCRAMBLE LENGTH\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"scramble_steps\" thumb-label=\"always\" :max=\"40\" :min=\"0\"\n                        :marks=\"[0,10,20,30,40]\"></vue-slider>\n                </v-flex>\n                <v-subheader>\n                    FRAMES PER TWIST\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"frames\" thumb-label=\"always\" :max=\"60\" :min=\"0\" :marks=\"[0,15,30,45,60]\">\n                    </vue-slider>\n                </v-flex>\n                <v-subheader>\n                    SENSITIVITY\n                </v-subheader>\n                <v-flex xs12 :style=\"{\n                    'padding-left': size / 2 + 'px',\n                    'padding-right': size / 2 + 'px',\n                    'padding-top': size * 0.2 + 'px',\n                    'font-size': (size * 0.3) + 'px',\n                    'height':size + 'px'\n                }\">\n                    <vue-slider v-model=\"sensibility\" thumb-label=\"always\" :max=\"100\" :min=\"0\"\n                        :marks=\"[0,25,50,75,100]\"></vue-slider>\n                </v-flex>\n            </v-container>\n        </v-card>\n    </v-bottom-sheet>\n</div>"

/***/ }),

/***/ "./src/vueapp/viewport/index.html":
/*!****************************************!*\
  !*** ./src/vueapp/viewport/index.html ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<div ref=\"canvas\"></div>"

/***/ }),

/***/ "./src/cube/capture.ts":
/*!*****************************!*\
  !*** ./src/cube/capture.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Capturer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./world */ "./src/cube/world.ts");


class Capturer {
    constructor() {
        this.world = new _world__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true,
            alpha: true
        });
        this.renderer.setClearColor(0, 0);
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(256, 256, true);
        this.world.resize(256, 256);
        this.generate("??????????????????????????????????????????????????????");
    }
    generate(state) {
        this.world.cube.restore(state.split(""));
        this.renderer.render(this.world.scene, this.world.camera);
        return this.renderer.domElement.toDataURL();
    }
}


/***/ }),

/***/ "./src/cube/controller.ts":
/*!********************************!*\
  !*** ./src/cube/controller.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Holder": () => (/* binding */ Holder),
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");




class Holder {
    constructor() {
        this.vector = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        this.index = -1;
        this.axis = "";
    }
}
class Controller {
    constructor(world) {
        this.interact = (action) => {
            switch (action.type) {
                case "touchstart":
                case "mousedown":
                    this.down.x = action.x;
                    this.down.y = action.y;
                    this.down_tick = new Date().getTime();
                    this.handleDown();
                    break;
                case "mousemove":
                case "touchmove":
                    this.move.x = action.x;
                    this.move.y = action.y;
                    this.handleMove();
                    break;
                case "touchend":
                case "touchcancel":
                case "mouseup":
                case "mouseout":
                    this.handleUp();
                    break;
                default:
                    return false;
            }
            return true;
        };
        this._lock = false;
        this._disable = false;
        this.world = world;
        this.dragging = false;
        this.rotating = false;
        this.axis = "";
        this.angle = 0;
        this.contingle = 0;
        this.down = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 0);
        this.move = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 0);
        this.down_tick = new Date().getTime();
        this.holder = new Holder();
        this.group = null;
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.update();
    }
    set lock(value) {
        this.handleUp();
        this._lock = value;
    }
    get lock() {
        return this._lock;
    }
    set disable(value) {
        this.handleUp();
        this._disable = value;
    }
    get disable() {
        return this._disable;
    }
    update() {
        const angle = this.contingle + this.angle;
        if (this.rotating) {
            if (this.group) {
                if (this.group.angle != angle) {
                    const delta = (angle - this.group.angle) / 2;
                    this.group.angle += delta;
                }
            }
            else {
                const groups = this.world.cube.table.groups[this.axis];
                for (const group of groups) {
                    if (group.angle != angle) {
                        const delta = (angle - group.angle) / 2;
                        group.angle += delta;
                    }
                }
            }
        }
    }
    match() {
        const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
        const finger = this.holder.vector;
        const index = this.holder.index;
        const ilayer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.indexToLayer)(index);
        for (const axis of ["x", "y", "z"]) {
            const vector = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[axis];
            if (vector.dot(plane.normal) === 0 && vector.dot(finger) === 0) {
                return this.world.cube.table.groups[axis][ilayer[axis]];
            }
        }
        return null;
    }
    intersect(point, plane) {
        const matrix = new three__WEBPACK_IMPORTED_MODULE_2__.Matrix4();
        const ray = new three__WEBPACK_IMPORTED_MODULE_2__.Ray();
        const result = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3();
        const x = (point.x / this.world.width) * 2 - 1;
        const y = -(point.y / this.world.height) * 2 + 1;
        matrix.copy(this.world.scene.matrix);
        matrix.invert();
        ray.origin.setFromMatrixPosition(this.world.camera.matrixWorld);
        ray.direction.set(x, y, 0.5).unproject(this.world.camera).sub(ray.origin).normalize();
        ray.applyMatrix4(matrix);
        ray.intersectPlane(plane, result);
        return result;
    }
    handleDown() {
        if (this.disable) {
            return;
        }
        if (this.dragging || this.rotating) {
            this.handleUp();
        }
        this.dragging = true;
        this.holder.index = -1;
        let min_dist = Infinity;
        for (const axis of ["x", "y", "z"]) {
            const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[axis];
            const point = this.intersect(this.down, plane);
            if (point !== null) {
                const cube_margin = _utils__WEBPACK_IMPORTED_MODULE_1__.cube_size / 2 + 0.001;
                const boxMin = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().setScalar(-cube_margin);
                const boxMax = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().setScalar(cube_margin);
                const box = new three__WEBPACK_IMPORTED_MODULE_2__.Box3(boxMin, boxMax);
                if (box.containsPoint(point)) {
                    const origin = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().setFromMatrixPosition(this.world.camera.matrixWorld);
                    const dist = point.distanceTo(origin);
                    if (dist < min_dist) {
                        min_dist = dist;
                        this.holder.axis = axis;
                        this.holder.index = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.worldToIndex)(point);
                    }
                }
            }
        }
    }
    handleMove() {
        if (this.disable) {
            return;
        }
        if (this.dragging) {
            const dx = this.move.x - this.down.x;
            const dy = this.move.y - this.down.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (Math.min(this.world.width, this.world.height) / d > 128) {
                return;
            }
            this.dragging = false;
            this.rotating = true;
            if (this.holder.index === -1) {
                if (Math.abs(dx) > Math.abs(dy)) {
                    this.axis = "y";
                }
                else {
                    if (this.down.x < this.world.width / 2) {
                        this.axis = "x";
                    }
                    else {
                        this.axis = "z";
                    }
                }
                this.group = null;
                const contingle_set = new Set();
                for (const group of this.world.cube.table.groups[this.axis]) {
                    let success = group.drag();
                    while (!success) {
                        _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish();
                        success = group.drag();
                    }
                    contingle_set.add(group.angle);
                }
                if (contingle_set.size == 1) {
                    for (const value of contingle_set.values()) {
                        this.contingle = value;
                        break;
                    }
                }
                else {
                    this.contingle = 0;
                }
            }
            else {
                const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
                const start = this.intersect(this.down, plane);
                const end = this.intersect(this.move, plane);
                const vector = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().subVectors(end, start);
                vector.max(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().sub(vector));
                const norm = Math.max(vector.x, vector.y, vector.z);
                this.holder.vector.copy(norm == vector.x ? new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 0, 0) : (norm == vector.y ? new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1, 0) :
                    new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 1)));
                this.group = this.match();
                if (!this.group) {
                    this.rotating = false;
                    return;
                }
                let success = this.group.drag();
                while (!success) {
                    _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish();
                    success = this.group.drag();
                }
                this.contingle = this.group.angle;
                vector.crossVectors(this.holder.vector, plane.normal);
                this.holder.vector.multiplyScalar(vector.x + vector.y + vector.z);
            }
        }
        if (this.rotating) {
            if (this.group) {
                const plane = _utils__WEBPACK_IMPORTED_MODULE_1__.axis_planes[this.holder.axis];
                const start = this.intersect(this.down, plane);
                const end = this.intersect(this.move, plane);
                const vector = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3().subVectors(end, start);
                vector.multiply(this.holder.vector);
                this.angle =
                    (vector.x + vector.y + vector.z) *
                        _utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility;
            }
            else {
                const dx = this.move.x - this.down.x;
                const dy = this.move.y - this.down.y;
                this.angle = _utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility * (this.axis == "y" ? -dx :
                    (this.axis == "x" ? -dy :
                        (dy)));
            }
        }
    }
    handleUp() {
        if (this.rotating) {
            let angle = this.angle;
            if (!this.lock) {
                if (Math.abs(angle) < Math.PI / 4) {
                    const speed = (Math.abs(angle) / (new Date().getTime() - this.down_tick)) * 1000;
                    if (speed > 0.2) {
                        angle = angle == 0 ? 0 : ((angle / Math.abs(angle)) * (Math.PI / 2));
                    }
                }
                angle = angle + this.contingle;
            }
            else {
                angle = 0;
            }
            if (this.group) {
                this.group.twist(angle, false);
            }
            else {
                const groups = this.world.cube.table.groups[this.axis];
                for (const group of groups) {
                    group.twist(angle, false);
                }
            }
        }
        this.group = null;
        this.holder.index = -1;
        this.dragging = false;
        this.rotating = false;
    }
}


/***/ }),

/***/ "./src/cube/cube.ts":
/*!**************************!*\
  !*** ./src/cube/cube.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cube)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cubelet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubelet */ "./src/cube/cubelet.ts");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./src/cube/group.ts");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils_internal */ "./src/cube/utils_internal.ts");







class Cube extends three__WEBPACK_IMPORTED_MODULE_5__.Group {
    constructor() {
        super();
        this.cubelets = [];
        this.callbacks = [];
        for (let i = 0; i < 27; i++) {
            const cubelet = new _cubelet__WEBPACK_IMPORTED_MODULE_0__["default"](i);
            this.cubelets.push(cubelet);
            this.add(cubelet);
        }
        this.locks = new Map();
        this.locks.set("x", new Set());
        this.locks.set("y", new Set());
        this.locks.set("z", new Set());
        this.locks.set("a", new Set());
        this.table = new _group__WEBPACK_IMPORTED_MODULE_1__.GroupTable(this);
        this.matrixAutoUpdate = false;
        this.updateMatrix();
        this.dirty = true;
    }
    callback() {
        for (const lock of this.locks.values()) {
            if (lock.size > 0) {
                return;
            }
        }
        for (const callback of this.callbacks) {
            callback();
        }
    }
    lock(axis, layer) {
        var _a;
        if ((_a = this.locks.get("a")) === null || _a === void 0 ? void 0 : _a.has(1)) {
            return false;
        }
        const axis_lockset = this.locks.get(axis);
        if (axis_lockset === undefined) {
            return false;
        }
        for (const lockset of this.locks.values()) {
            if (lockset != axis_lockset && lockset.size > 0) {
                return false;
            }
        }
        axis_lockset.add(layer);
        return true;
    }
    unlock(axis, layer) {
        const axis_lockset = this.locks.get(axis);
        axis_lockset === null || axis_lockset === void 0 ? void 0 : axis_lockset.delete(layer);
    }
    random3() {
        return Math.min(Math.max(Math.floor(Math.random() * 3), 0), 2);
    }
    scramble() {
        for (let i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_3__.cube_config.scramble_steps; i++) {
            const axis = ["x", "y", "z"][this.random3()];
            const level = this.random3();
            const angle = (this.random3() - 1) * (Math.PI / 2);
            this.table.groups[axis][level].twist(angle === 0 ? Math.PI : angle, true);
        }
    }
    reset() {
        _twister__WEBPACK_IMPORTED_MODULE_2__.twister.finish();
        for (const cubelet of this.cubelets) {
            this.remove(cubelet);
        }
        this.cubelets.splice(0);
        for (let i = 0; i < 27; i++) {
            const cubelet = new _cubelet__WEBPACK_IMPORTED_MODULE_0__["default"](i);
            this.cubelets.push(cubelet);
            this.add(cubelet);
        }
        this.table = new _group__WEBPACK_IMPORTED_MODULE_1__.GroupTable(this);
        this.dirty = true;
        this.callback();
    }
    serialize() {
        const result = [];
        let x, y, z;
        _twister__WEBPACK_IMPORTED_MODULE_2__.twister.finish();
        y = 2;
        for (z = 0; z < 3; z++) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.U);
                result.push(color);
            }
        }
        x = 2;
        for (y = 2; y >= 0; y--) {
            for (z = 2; z >= 0; z--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.R);
                result.push(color);
            }
        }
        z = 2;
        for (y = 2; y >= 0; y--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.F);
                result.push(color);
            }
        }
        y = 0;
        for (z = 2; z >= 0; z--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.D);
                result.push(color);
            }
        }
        x = 0;
        for (y = 2; y >= 0; y--) {
            for (z = 0; z < 3; z++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.L);
                result.push(color);
            }
        }
        z = 0;
        for (y = 2; y >= 0; y--) {
            for (x = 2; x >= 0; x--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = this.cubelets[index].getColorOf(_utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.B);
                result.push(color);
            }
        }
        return result;
    }
    restore(state) {
        let x, y, z;
        let cur = 0;
        let face;
        this.reset();
        y = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.U;
        for (z = 0; z < 3; z++) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        x = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.R;
        for (y = 2; y >= 0; y--) {
            for (z = 2; z >= 0; z--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        z = 2;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.F;
        for (y = 2; y >= 0; y--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        y = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.D;
        for (z = 2; z >= 0; z--) {
            for (x = 0; x < 3; x++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        x = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.L;
        for (y = 2; y >= 0; y--) {
            for (z = 0; z < 3; z++) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        z = 0;
        face = _utils_internal__WEBPACK_IMPORTED_MODULE_4__.Face.B;
        for (y = 2; y >= 0; y--) {
            for (x = 2; x >= 0; x--) {
                const index = z * 3 * 3 + y * 3 + x;
                const color = state[cur++];
                const cubelet = this.cubelets[index];
                cubelet.remove(cubelet.stickers[face]);
                cubelet.stickers[face] = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh();
                if (color != "?") {
                    const face_attr = _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_face_attrs[face];
                    const sticker = new three__WEBPACK_IMPORTED_MODULE_5__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_sticker, _utils__WEBPACK_IMPORTED_MODULE_3__.cubelet_lambers[color]);
                    sticker.rotation.setFromVector3(face_attr.rotation);
                    sticker.position.copy(face_attr.position);
                    cubelet.stickers[face] = sticker;
                    cubelet.add(sticker);
                }
            }
        }
        this.dirty = true;
    }
}


/***/ }),

/***/ "./src/cube/cubelet.ts":
/*!*****************************!*\
  !*** ./src/cube/cubelet.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cubelet)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");




class Cubelet extends three__WEBPACK_IMPORTED_MODULE_1__.Group {
    constructor(index) {
        super();
        this._vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        this.index = index;
        const drctn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.indexToDirection)(index);
        this.vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(drctn.x, drctn.y, drctn.z);
        this.frame = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_frame, _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_core);
        this.add(this.frame);
        this.stickers = new Array(6);
        for (let i = 0; i < 6; i++) {
            const face_attr = _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_face_attrs[i];
            if (face_attr.match(this.vector)) {
                const sticker = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_sticker, face_attr.lambert);
                sticker.rotation.setFromVector3(face_attr.rotation);
                sticker.position.copy(face_attr.position);
                this.stickers[i] = sticker;
                this.add(sticker);
            }
        }
        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }
    set vector(vector) {
        this._vector.copy(vector);
        this.index = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.directionToIndex)(vector);
        this.position.copy(vector);
        this.position.multiplyScalar(_utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_defs.size);
    }
    get vector() {
        return this._vector;
    }
    convertFace(face) {
        let position = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
        const quaternion = new three__WEBPACK_IMPORTED_MODULE_1__.Quaternion().copy(this.quaternion);
        for (const binding of _utils__WEBPACK_IMPORTED_MODULE_0__.facePostionBindings) {
            if (binding.face === face) {
                position.copy(binding.position);
                break;
            }
        }
        position.applyQuaternion(quaternion.invert());
        const vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.round(position.x), Math.round(position.y), Math.round(position.z));
        for (const binding of _utils__WEBPACK_IMPORTED_MODULE_0__.facePostionBindings) {
            if (binding.position.equals(vector)) {
                return binding.face;
            }
        }
        return -1;
    }
    getColorOf(face) {
        const sticker = this.stickers[this.convertFace(face)];
        switch (sticker.material) {
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.L:
                return "L";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.R:
                return "R";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.F:
                return "F";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.B:
                return "B";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.U:
                return "U";
            case _utils__WEBPACK_IMPORTED_MODULE_0__.cubelet_lambers.D:
                return "D";
        }
        return "?";
    }
}


/***/ }),

/***/ "./src/cube/group.ts":
/*!***************************!*\
  !*** ./src/cube/group.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CubeGroup),
/* harmony export */   "GroupTable": () => (/* binding */ GroupTable)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _twister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twister */ "./src/cube/twister.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");



class CubeGroup extends three__WEBPACK_IMPORTED_MODULE_2__.Group {
    constructor(cube, axis, layer) {
        super();
        this.twisting = undefined;
        this._angle = 0;
        this.holding = false;
        this.cube = cube;
        this.axis = axis;
        this.layer = layer;
        this.cubelets = [];
        this.indices = [];
        for (let i = 0; i < 27; i++) {
            const ilayer = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.indexToLayer)(i);
            if (axis == "x" && ilayer.x == layer
                || axis == "y" && ilayer.y == layer
                || axis == "z" && ilayer.z == layer) {
                this.indices.push(i);
            }
        }
        this.matrixAutoUpdate = false;
        this.updateMatrix();
    }
    set angle(angle) {
        this._angle = angle;
        this.setRotationFromAxisAngle(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], angle);
        this.updateMatrix();
        this.cube.dirty = true;
    }
    get angle() {
        return this._angle;
    }
    cancel() {
        if (this.twisting) {
            const angle = this.twisting.arrival;
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.cancel(this.twisting);
            this.twisting = undefined;
            return Math.round(angle / (Math.PI / 2)) * (Math.PI / 2);
        }
        return 0;
    }
    finish() {
        if (this.twisting) {
            const angle = this.twisting.arrival - this.angle;
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.finish(this.twisting);
            this.twisting = undefined;
            return angle;
        }
        return 0;
    }
    hold() {
        const success = this.cube.lock(this.axis, this.layer);
        if (!success) {
            return false;
        }
        this.holding = true;
        for (const i of this.indices) {
            const cubelet = this.cube.cubelets[i];
            this.cubelets.push(cubelet);
            this.cube.remove(cubelet);
            this.add(cubelet);
        }
        this.cube.add(this);
        return true;
    }
    drag() {
        while (this.holding) {
            this.angle = -this.finish();
        }
        return this.hold();
    }
    drop() {
        this.holding = false;
        this.twisting = undefined;
        while (true) {
            const cubelet = this.cubelets.pop();
            if (undefined === cubelet) {
                break;
            }
            this.rotate(cubelet);
            this.remove(cubelet);
            this.cube.add(cubelet);
            this.cube.cubelets[cubelet.index] = cubelet;
        }
        this.cube.remove(this);
        this.cube.dirty = true;
        this.angle = 0;
        this.cube.unlock(this.axis, this.layer);
        this.cube.callback();
    }
    twist(angle, fast) {
        if (this.holding) {
            angle = angle + this.cancel();
        }
        else {
            const success = this.hold();
            if (!success) {
                return false;
            }
            this.angle = 0;
        }
        angle = Math.round(angle / (Math.PI / 2)) * (Math.PI / 2);
        if (fast) {
            this.angle = angle;
        }
        if (Math.abs(this.angle - angle) < 1e-6) {
            this.drop();
        }
        else {
            const frac = Math.abs(this.angle - angle) / (Math.PI / 2);
            const duration = _utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.frames * (2 - 2 / (frac + 1));
            this.twisting = new _twister__WEBPACK_IMPORTED_MODULE_0__.Twist(this.angle, angle, duration, (value) => {
                this.angle = value;
                if (Math.abs(this.angle - angle) < 1e-6) {
                    this.drop();
                    return true;
                }
                return false;
            });
            _twister__WEBPACK_IMPORTED_MODULE_0__.twister.twists.push(this.twisting);
        }
        return true;
    }
    rotate(cubelet) {
        cubelet.rotateOnWorldAxis(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], this.angle);
        cubelet.vector = cubelet.vector.applyAxisAngle(_utils__WEBPACK_IMPORTED_MODULE_1__.axis_vectors[this.axis], this.angle);
        cubelet.updateMatrix();
    }
}
class GroupTable {
    constructor(cube) {
        this.groups = {};
        for (const axis of ["x", "y", "z"]) {
            const list = [];
            for (let i = 0; i < 3; i++) {
                list.push(new CubeGroup(cube, axis, i));
            }
            this.groups[axis] = list;
        }
    }
}


/***/ }),

/***/ "./src/cube/interactor.ts":
/*!********************************!*\
  !*** ./src/cube/interactor.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "default": () => (/* binding */ Interactor)
/* harmony export */ });
class Interaction {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
    }
}
class Interactor {
    constructor(doms, callback) {
        this.doms = [];
        this.touch = (event) => {
            var _a;
            const first = event.changedTouches[0];
            if (event.type === "touchstart") {
                this.target = event.target;
                if (this.last) {
                    const action = new Interaction("touchend", this.last.clientX - this.doms[0].getBoundingClientRect().left, this.last.clientY - this.doms[0].getBoundingClientRect().top);
                    this.callback(action);
                }
                this.last = first;
            }
            if (this.notin() || ((_a = this.last) === null || _a === void 0 ? void 0 : _a.identifier) != first.identifier) {
                return false;
            }
            const action = new Interaction(event.type, first.clientX - this.doms[0].getBoundingClientRect().left, first.clientY - this.doms[0].getBoundingClientRect().top);
            this.callback(action);
            event.preventDefault();
            if (event.type === "touchend" || event.type === "touchcancel") {
                this.target = null;
            }
            return true;
        };
        this.mouse = (event) => {
            if (event.type === "mousedown") {
                this.target = event.target;
            }
            if (this.notin()) {
                return true;
            }
            const action = new Interaction(event.type, event.clientX - this.doms[0].getBoundingClientRect().left, event.clientY - this.doms[0].getBoundingClientRect().top);
            this.callback(action);
            if (event.type === "mouseup") {
                this.target = null;
            }
            return false;
        };
        for (const dom of doms) {
            if (dom) {
                this.doms.push(dom);
            }
        }
        this.callback = callback;
        document.addEventListener("touchstart", this.touch);
        document.addEventListener("touchmove", this.touch);
        document.addEventListener("touchend", this.touch);
        document.addEventListener("touchcancel", this.touch);
        document.addEventListener("mousedown", this.mouse);
        document.addEventListener("mousemove", this.mouse);
        document.addEventListener("mouseup", this.mouse);
        document.addEventListener("touchmove", function (e) { e.preventDefault(); }, { passive: false });
    }
    notin() {
        for (const dom of this.doms) {
            if (this.target === dom) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),

/***/ "./src/cube/lbl.ts":
/*!*************************!*\
  !*** ./src/cube/lbl.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LBLSolver)
/* harmony export */ });
class LBLSolver {
    constructor() {
        this.cubeState = {};
        this.nextColor = {};
        this.nextFace = { l: "f", f: "r", r: "b", b: "l" };
        this.prevFace = { l: "b", b: "r", r: "f", f: "l" };
    }
    getCubeState(state) {
        this.cubeState = {
            b: state[49],
            bl: state[50].concat(state[39]),
            d: state[31],
            db: state[34].concat(state[52]),
            dbl: state[33].concat(state[53]).concat(state[42]),
            df: state[28].concat(state[25]),
            dfr: state[29].concat(state[26]).concat(state[15]),
            dl: state[30].concat(state[43]),
            dlf: state[27].concat(state[44]).concat(state[24]),
            dr: state[32].concat(state[16]),
            drb: state[35].concat(state[17]).concat(state[51]),
            f: state[22],
            fr: state[23].concat(state[12]),
            l: state[40],
            lf: state[41].concat(state[21]),
            r: state[13],
            rb: state[14].concat(state[48]),
            u: state[4],
            ub: state[1].concat(state[46]),
            ubl: state[0].concat(state[47]).concat(state[36]),
            uf: state[7].concat(state[19]),
            ufr: state[8].concat(state[20]).concat(state[9]),
            ul: state[3].concat(state[37]),
            ulf: state[6].concat(state[38]).concat(state[18]),
            ur: state[5].concat(state[10]),
            urb: state[2].concat(state[11]).concat(state[45]),
        };
        const color_l = this.cubeState["l"];
        const color_r = this.cubeState["r"];
        const color_f = this.cubeState["f"];
        const color_b = this.cubeState["b"];
        this.nextColor[color_l] = color_f;
        this.nextColor[color_f] = color_r;
        this.nextColor[color_r] = color_b;
        this.nextColor[color_b] = color_l;
        console.log(this.cubeState);
        console.log(this.nextColor);
    }
    Twist_B() {
        let tmp = this.cubeState.ub;
        this.cubeState.ub = this.cubeState.rb;
        this.cubeState.rb = this.cubeState.db;
        this.cubeState.db = this.cubeState.bl[1] + this.cubeState.bl[0];
        this.cubeState.bl = tmp[1] + tmp[0];
        tmp = this.cubeState.ubl;
        this.cubeState.ubl = this.cubeState.urb[1] + this.cubeState.urb[2] + this.cubeState.urb[0];
        this.cubeState.urb = this.cubeState.drb[1] + this.cubeState.drb[0] + this.cubeState.drb[2];
        this.cubeState.drb = this.cubeState.dbl[2] + this.cubeState.dbl[0] + this.cubeState.dbl[1];
        this.cubeState.dbl = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_R() {
        let tmp = this.cubeState.ur;
        this.cubeState.ur = this.cubeState.fr;
        this.cubeState.fr = this.cubeState.dr;
        this.cubeState.dr = this.cubeState.rb[1] + this.cubeState.rb[0];
        this.cubeState.rb = tmp[1] + tmp[0];
        tmp = this.cubeState.urb;
        this.cubeState.urb = this.cubeState.ufr[1] + this.cubeState.ufr[2] + this.cubeState.ufr[0];
        this.cubeState.ufr = this.cubeState.dfr[1] + this.cubeState.dfr[0] + this.cubeState.dfr[2];
        this.cubeState.dfr = this.cubeState.drb[2] + this.cubeState.drb[0] + this.cubeState.drb[1];
        this.cubeState.drb = tmp[2] + tmp[1] + tmp[0];
    }
    ;
    Twist_F() {
        let tmp = this.cubeState.uf;
        this.cubeState.uf = this.cubeState.lf;
        this.cubeState.lf = this.cubeState.df;
        this.cubeState.df = this.cubeState.fr[1] + this.cubeState.fr[0];
        this.cubeState.fr = tmp[1] + tmp[0];
        tmp = this.cubeState.ufr;
        this.cubeState.ufr = this.cubeState.ulf[1] + this.cubeState.ulf[2] + this.cubeState.ulf[0];
        this.cubeState.ulf = this.cubeState.dlf[1] + this.cubeState.dlf[0] + this.cubeState.dlf[2];
        this.cubeState.dlf = this.cubeState.dfr[2] + this.cubeState.dfr[0] + this.cubeState.dfr[1];
        this.cubeState.dfr = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_L() {
        let tmp = this.cubeState.ul;
        this.cubeState.ul = this.cubeState.bl;
        this.cubeState.bl = this.cubeState.dl;
        this.cubeState.dl = this.cubeState.lf[1] + this.cubeState.lf[0];
        this.cubeState.lf = tmp[1] + tmp[0];
        tmp = this.cubeState.ulf;
        this.cubeState.ulf = this.cubeState.ubl[1] + this.cubeState.ubl[2] + this.cubeState.ubl[0];
        this.cubeState.ubl = this.cubeState.dbl[1] + this.cubeState.dbl[0] + this.cubeState.dbl[2];
        this.cubeState.dbl = this.cubeState.dlf[2] + this.cubeState.dlf[0] + this.cubeState.dlf[1];
        this.cubeState.dlf = tmp[2] + tmp[1] + tmp[0];
    }
    Twist_U() {
        let tmp = this.cubeState.ul;
        this.cubeState.ul = this.cubeState.uf;
        this.cubeState.uf = this.cubeState.ur;
        this.cubeState.ur = this.cubeState.ub;
        this.cubeState.ub = tmp;
        tmp = this.cubeState.ulf;
        this.cubeState.ulf = this.cubeState.ufr;
        this.cubeState.ufr = this.cubeState.urb;
        this.cubeState.urb = this.cubeState.ubl;
        this.cubeState.ubl = tmp;
    }
    Twist_D() {
        let tmp = this.cubeState.dl;
        this.cubeState.dl = this.cubeState.db;
        this.cubeState.db = this.cubeState.dr;
        this.cubeState.dr = this.cubeState.df;
        this.cubeState.df = tmp;
        tmp = this.cubeState.dlf;
        this.cubeState.dlf = this.cubeState.dbl;
        this.cubeState.dbl = this.cubeState.drb;
        this.cubeState.drb = this.cubeState.dfr;
        this.cubeState.dfr = tmp;
    }
    Twist_Y() {
        this.Twist_U();
        let tmp = this.cubeState.lf;
        this.cubeState.lf = this.cubeState.fr;
        this.cubeState.fr = this.cubeState.rb;
        this.cubeState.rb = this.cubeState.bl;
        this.cubeState.bl = tmp;
        tmp = this.cubeState.f;
        this.cubeState.f = this.cubeState.r;
        this.cubeState.r = this.cubeState.b;
        this.cubeState.b = this.cubeState.l;
        this.cubeState.l = tmp;
        this.Twist_D(), this.Twist_D(), this.Twist_D();
    }
    changeState(order_list) {
        for (const order of order_list) {
            switch (order) {
                case "D":
                    this.Twist_D();
                    break;
                case "d":
                    this.Twist_D();
                    this.Twist_D();
                    this.Twist_D();
                    break;
                case "U":
                    this.Twist_U();
                    break;
                case "u":
                    this.Twist_U();
                    this.Twist_U();
                    this.Twist_U();
                    break;
                case "L":
                    this.Twist_L();
                    break;
                case "l":
                    this.Twist_L();
                    this.Twist_L();
                    this.Twist_L();
                    break;
                case "F":
                    this.Twist_F();
                    break;
                case "f":
                    this.Twist_F();
                    this.Twist_F();
                    this.Twist_F();
                    break;
                case "R":
                    this.Twist_R();
                    break;
                case "r":
                    this.Twist_R();
                    this.Twist_R();
                    this.Twist_R();
                    break;
                case "B":
                    this.Twist_B();
                    break;
                case "b":
                    this.Twist_B();
                    this.Twist_B();
                    this.Twist_B();
                    break;
                case "Y":
                    this.Twist_Y();
                    break;
                case "y":
                    this.Twist_Y();
                    this.Twist_Y();
                    this.Twist_Y();
                    break;
            }
        }
    }
    getBlockPos(block) {
        const reg = new RegExp("^[" + block + "]{" + block.length + "}$");
        const result = {};
        for (let k in this.cubeState) {
            if (this.cubeState[k].match(reg)) {
                result["k"] = k;
                result["v"] = this.cubeState[k];
                return result;
            }
        }
        return result;
    }
    FIRST_LAYER_EDGES_SINGLE(block_pos, block_color) {
        let exp = "", exp_log = "";
        let s;
        for (let i = 0; i < 7; i++) {
            s = this.getBlockPos(block_color);
            if (s.k.indexOf("d") != -1) {
                if (s.v[0] == block_color[0]) {
                    if (s.k == block_pos)
                        return exp_log;
                    else
                        exp = s.k[1].toUpperCase() + s.k[1].toUpperCase();
                }
                else
                    exp = s.k[1].toUpperCase();
            }
            else if (s.k.indexOf("u") != -1) {
                if (s.k[1] == block_pos[1]) {
                    if (s.v[0] == block_color[0])
                        exp = s.k[1].toUpperCase() + s.k[1].toUpperCase();
                    else if (this.cubeState[block_pos[0] + this.nextFace[s.k[1]]] !=
                        this.cubeState[block_pos[0]] + this.cubeState[this.nextFace[s.k[1]]])
                        exp = "u" + this.nextFace[s.k[1]] + s.k[1].toUpperCase();
                    else
                        exp = "u" + this.nextFace[s.k[1]] + s.k[1].toUpperCase() + this.nextFace[s.k[1]].toUpperCase();
                }
                else
                    exp = "U";
            }
            else {
                if (s.v[0] == block_color[0]) {
                    if (s.k[1] == block_pos[1])
                        exp = s.k[1];
                    else if (this.cubeState[block_pos[0] + s.k[1]] != this.cubeState[block_pos[0]] + this.cubeState[s.k[1]])
                        exp = s.k[1].toUpperCase();
                    else
                        exp = s.k[1].toUpperCase() + "U" + s.k[1];
                }
                else {
                    if (s.k[0] == block_pos[1])
                        exp = s.k[0].toUpperCase();
                    else if (this.cubeState[block_pos[0] + s.k[0]] != this.cubeState[block_pos[0]] + this.cubeState[s.k[0]])
                        exp = s.k[0];
                    else
                        exp = s.k[0] + "U" + s.k[0].toUpperCase();
                }
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("First Layer Cross Single Error: ", exp_log);
        return "First Layer Cross Single Error: " + exp_log;
    }
    FIRST_LAYER_CORNERS_SINGLE(block_pos, block_color) {
        let exp = "", exp_log = "", s;
        for (let i = 0; i < 10; i++) {
            s = this.getBlockPos(block_color);
            if (s.k.indexOf("d") != -1) {
                if (s.v[0] == this.cubeState["d"]) {
                    if (s.k == block_pos)
                        return exp_log;
                    else
                        exp = s.k[1] + "U" + s.k[1].toUpperCase();
                }
                else if (s.v[1] == this.cubeState["d"])
                    exp = s.k[1] + "u" + s.k[1].toUpperCase();
                else
                    exp = s.k[2].toUpperCase() + "U" + s.k[2];
            }
            else {
                if (s.k == "u" + block_pos[1] + block_pos[2]) {
                    if (s.v[0] == this.cubeState["d"])
                        exp = s.k[2].toUpperCase() + "u" + s.k[2];
                    else if (s.v[1] == this.cubeState["d"])
                        exp = s.k[1] + "u" + s.k[1].toUpperCase();
                    else
                        exp = s.k[2].toUpperCase() + "U" + s.k[2];
                }
                else
                    exp = "U";
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("First Layer Corners Single Error: ", exp_log);
        return "First Layer Corners Single Error: " + exp_log;
    }
    ;
    SECOND_LAYER_SINGLE(block_pos, block_color) {
        let exp = "", exp_log = "", s;
        for (let i = 0; i < 6; i++) {
            s = this.getBlockPos(block_color);
            if (s.k.indexOf("u") != -1) {
                if (this.nextColor[s.v[0]] == s.v[1]) {
                    if (s.v[1] == this.cubeState[s.k[1]])
                        exp = "u" + this.prevFace[s.k[1]] + "U" + this.prevFace[s.k[1]].toUpperCase()
                            + "U" + s.k[1].toUpperCase() + "u" + s.k[1];
                    else
                        exp = "U";
                }
                else {
                    if (s.v[1] == this.cubeState[s.k[1]])
                        exp = "U" + this.nextFace[s.k[1]].toUpperCase() + "u" + this.nextFace[s.k[1]]
                            + "u" + s.k[1] + "U" + s.k[1].toUpperCase();
                    else
                        exp = "U";
                }
            }
            else {
                if (s.v[0] == this.cubeState[s.k[0]] && s.v[1] == this.cubeState[s.k[1]])
                    return exp_log;
                else
                    exp = "u" + s.k[0] + "U" + s.k[0].toUpperCase() + "U" + s.k[1].toUpperCase() + "u" + s.k[1];
            }
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Second Layer Single Error: ", exp_log);
        return "Second Layer Single Error: " + exp_log;
    }
    FIRST_LAYER_EDGES() {
        console.log("------------ COMPLETE THE FIRST LAYER EDGES ------------");
        let order = "";
        order += this.FIRST_LAYER_EDGES_SINGLE("dl", this.cubeState["d"] + this.cubeState["l"]);
        order += this.FIRST_LAYER_EDGES_SINGLE("df", this.cubeState["d"] + this.cubeState["f"]);
        order += this.FIRST_LAYER_EDGES_SINGLE("dr", this.cubeState["d"] + this.cubeState["r"]);
        order += this.FIRST_LAYER_EDGES_SINGLE("db", this.cubeState["d"] + this.cubeState["b"]);
        return this.compress(order);
    }
    ;
    FIRST_LAYER_CORNERS() {
        console.log("------------ COMPLETE THE FIRST LAYER CORNERS ------------");
        let order = "";
        order += this.FIRST_LAYER_CORNERS_SINGLE("dlf", this.cubeState["d"] + this.cubeState["l"] + this.cubeState["f"]);
        order += this.FIRST_LAYER_CORNERS_SINGLE("dfr", this.cubeState["d"] + this.cubeState["f"] + this.cubeState["r"]);
        order += this.FIRST_LAYER_CORNERS_SINGLE("drb", this.cubeState["d"] + this.cubeState["r"] + this.cubeState["b"]);
        order += this.FIRST_LAYER_CORNERS_SINGLE("dbl", this.cubeState["d"] + this.cubeState["b"] + this.cubeState["l"]);
        return this.compress(order);
    }
    SECOND_LAYER() {
        console.log("------------ COMPLETE THE SECOND LAYER ------------");
        let order = "";
        order += this.SECOND_LAYER_SINGLE("lf", this.cubeState["l"] + this.cubeState["f"]);
        order += this.SECOND_LAYER_SINGLE("fr", this.cubeState["f"] + this.cubeState["r"]);
        order += this.SECOND_LAYER_SINGLE("rb", this.cubeState["r"] + this.cubeState["b"]);
        order += this.SECOND_LAYER_SINGLE("bl", this.cubeState["b"] + this.cubeState["l"]);
        return this.compress(order);
    }
    ;
    TOP_CROSS() {
        console.log("------------ COMPLETE THE TOP CROSS ------------");
        let exp = "", exp_log = "";
        let uc = this.cubeState["u"];
        for (let i = 0; i < 4; i++) {
            if (this.cubeState.ul[0] == uc && this.cubeState.ur[0] == uc
                && this.cubeState.uf[0] == uc && this.cubeState.ub[0] == uc)
                return this.compress(exp_log);
            else if (this.cubeState.ul[0] == uc && this.cubeState.ur[0] == uc)
                exp = "FRUruf";
            else if (this.cubeState.uf[0] == uc && this.cubeState.ub[0] == uc)
                exp = "RBUbur";
            else if (this.cubeState.uf[0] == uc && this.cubeState.ur[0] == uc)
                exp = "FRUruf";
            else if (this.cubeState.ur[0] == uc && this.cubeState.ub[0] == uc)
                exp = "RBUbur";
            else if (this.cubeState.ub[0] == uc && this.cubeState.ul[0] == uc)
                exp = "BLUlub";
            else if (this.cubeState.ul[0] == uc && this.cubeState.uf[0] == uc)
                exp = "LFUful";
            else
                exp = "FRUruf";
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Top Cross Error: ", exp_log);
        return "Top Cross Error: " + exp_log;
    }
    ;
    THIRD_LAYER_CORNERS_POS() {
        console.log("------------ COMPLETE THE THIRD LAYER CORNERS (POSITION) ------------");
        const step = "rLUluRULul", blocks = ["ulf", "ufr", "urb", "ubl"], uc = this.cubeState["u"];
        let exp_log = "";
        for (let i = 0; i < 4; i++) {
            let last = i;
            let times = 0;
            for (let j = i + 1; j < i + 4; j++) {
                const next = j % 4;
                let lastc = this.cubeState[blocks[last]].replace(uc, "");
                let nextc = this.cubeState[blocks[next]].replace(uc, "");
                if (this.nextColor[lastc[0]] == lastc[1]) {
                    if (nextc.indexOf(lastc[1]) != -1
                        && nextc.indexOf(this.nextColor[lastc[1]]) != -1)
                        times += 1;
                    else
                        break;
                }
                else {
                    if (nextc.indexOf(lastc[0]) != -1
                        && nextc.indexOf(this.nextColor[lastc[0]]) != -1)
                        times += 1;
                    else
                        break;
                }
                last = next;
            }
            if (times == 1) {
                last = (last - 1 + 4) % 4;
                if (last == 0)
                    exp_log = "u" + step, this.changeState(exp_log);
                else if (last == 1)
                    exp_log = step, this.changeState(exp_log);
                else if (last == 2)
                    exp_log = "U" + step, this.changeState(exp_log);
                else if (last == 3)
                    exp_log = "UU" + step, this.changeState(exp_log);
                return this.compress(exp_log);
            }
            else if (times > 1)
                return this.compress(exp_log);
        }
        exp_log = step + "U" + step;
        this.changeState(exp_log);
        return this.compress(exp_log);
    }
    THIRD_LAYER_CORNERS_ORI() {
        console.log("------------ COMPLETE THE THIRD LAYER CORNERS (ORIENT) ------------");
        const step1 = "ruRuruuRuu", step2 = "FUfUFUUfUU";
        const blocks = ["ulf", "ufr", "urb", "ubl"], uc = this.cubeState["u"];
        let exp_log = "", s = "";
        for (const block of blocks)
            s += this.cubeState[block].indexOf(uc);
        if (s.match(/2220|0222|2022|2202/)) {
            if (s == "0222")
                exp_log += "U";
            else if (s == "2022")
                exp_log += "UU";
            else if (s == "2202")
                exp_log += "u";
            exp_log += step1;
        }
        else if (s.match(/1110|0111|1011|1101/)) {
            if (s == "0111")
                exp_log += "U";
            else if (s == "1011")
                exp_log += "UU";
            else if (s == "1101")
                exp_log += "u";
            exp_log += step2;
        }
        else if (s.match(/2001|1200|0120|0012/)) {
            if (s == "1200")
                exp_log += "U";
            else if (s == "0120")
                exp_log += "UU";
            else if (s == "0012")
                exp_log += "u";
            exp_log += step1 + "U" + step2;
        }
        else if (s.match(/1002|2100|0210|0021/)) {
            if (s == "2100")
                exp_log += "U";
            else if (s == "0210")
                exp_log += "UU";
            else if (s == "0021")
                exp_log += "u";
            exp_log += step2 + "U" + step1;
        }
        else if (s.match(/2121|1212/)) {
            if (s == "1212")
                exp_log += "U";
            exp_log += step2 + "UU" + step2;
        }
        else if (s.match(/2112|2211|1221|1122/)) {
            if (s == "2211")
                exp_log += "U";
            else if (s == "1221")
                exp_log += "UU";
            else if (s == "1122")
                exp_log += "u";
            exp_log += step1 + "U" + step1;
        }
        else if (s.match(/0201|1020/)) {
            if (s == "1020")
                exp_log += "U";
            exp_log += step1 + "UU" + step2;
        }
        else if (s.match(/0102|2010/)) {
            if (s == "2010")
                exp_log += "U";
            exp_log += step2 + "UU" + step1;
        }
        this.changeState(exp_log);
        return this.compress(exp_log);
    }
    THIRD_LAYER_EDGES() {
        console.log("------------ COMPLETE THE THIRD LAYER EDGES ------------");
        const step1 = "ruRuruuRuu", step2 = "FUfUFUUfUU";
        let exp_log = "";
        while (this.cubeState.ulf[2] != this.cubeState.f) {
            this.changeState("U");
            exp_log += "U";
        }
        for (let i = 0; i < 3; i++) {
            let exp = "";
            const s = this.cubeState.uf[1] + this.cubeState.ur[1] + this.cubeState.ub[1] + this.cubeState.ul[1];
            const c = this.cubeState.f + this.cubeState.r + this.cubeState.b + this.cubeState.l;
            let times = 0, pos = -1;
            for (let j = 0; j < 4; j++) {
                if (s[j] == c[j])
                    times++, pos = j;
            }
            if (times > 1)
                return this.compress(exp_log);
            else if (times == 1) {
                if (pos == 1)
                    exp += "Y";
                else if (pos == 2)
                    exp += "YY";
                else if (pos == 3)
                    exp += "y";
                if (s[(pos + 1) % 4] == this.nextColor[this.nextColor[s[pos]]])
                    exp += step1 + step2;
                else
                    exp += "y" + step2 + step1;
            }
            else
                exp += step1 + step2;
            exp_log += exp;
            this.changeState(exp);
        }
        console.log("Third Layer Edges Error: ", exp_log);
        return "Third Layer Edges Error: " + exp_log;
    }
    solveCube() {
        let steps = [];
        steps.push(this.FIRST_LAYER_EDGES());
        steps.push(this.FIRST_LAYER_CORNERS());
        steps.push(this.SECOND_LAYER());
        steps.push(this.TOP_CROSS());
        steps.push(this.THIRD_LAYER_CORNERS_POS());
        steps.push(this.THIRD_LAYER_CORNERS_ORI());
        steps.push(this.THIRD_LAYER_EDGES());
        return steps;
    }
    ;
    compress(order) {
        for (let i = 0; i < 10; i++) {
            order = order.replace(/uU|Uu|dD|Dd|lL|Ll|fF|Ff|rR|Rr|bB|Bb|yY|Yy|uuuu|dddd|llll|ffff|rrrr|bbbb|yyyy|UUUU|DDDD|LLLL|FFFF|RRRR|BBBB|YYYY/g, "");
            order = order.replace(/uuu/g, "U");
            order = order.replace(/ddd/g, "D");
            order = order.replace(/lll/g, "L");
            order = order.replace(/fff/g, "F");
            order = order.replace(/rrr/g, "R");
            order = order.replace(/bbb/g, "B");
            order = order.replace(/yyy/g, "Y");
            order = order.replace(/UUU/g, "u");
            order = order.replace(/DDD/g, "d");
            order = order.replace(/LLL/g, "l");
            order = order.replace(/FFF/g, "f");
            order = order.replace(/RRR/g, "r");
            order = order.replace(/BBB/g, "b");
            order = order.replace(/YYY/g, "y");
        }
        return order;
    }
    solve(state) {
        this.getCubeState(state);
        return this.solveCube();
    }
}


/***/ }),

/***/ "./src/cube/twister.ts":
/*!*****************************!*\
  !*** ./src/cube/twister.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Twist": () => (/* binding */ Twist),
/* harmony export */   "Twister": () => (/* binding */ Twister),
/* harmony export */   "twister": () => (/* binding */ twister)
/* harmony export */ });
class Twist {
    constructor(depature, arrival, duration, callback_func) {
        this.departure = depature;
        this.arrival = arrival;
        this.durantion = duration;
        this.callback_func = callback_func;
        this.elapsed = 0;
    }
    finish() {
        this.elapsed = this.durantion;
        this.current = this.arrival;
        this.callback();
    }
    update() {
        this.elapsed++;
        const frac = Math.min(Math.max(this.elapsed / this.durantion, 0), 1);
        this.current = frac == 1 ? this.arrival : (this.departure + (this.arrival - this.departure) * (1 - (1 - frac) * (1 - frac)));
    }
    callback() {
        return this.callback_func(this.current);
    }
}
class Twister {
    constructor() {
        this.twists = [];
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.update();
    }
    update() {
        let cur = 0;
        let end = this.twists.length;
        while (cur < end) {
            this.twists[cur].update();
            if (this.twists[cur].callback()) {
                this.twists.splice(cur, 1);
                end--;
            }
            else {
                cur++;
            }
        }
    }
    finish(twist = undefined) {
        if (twist) {
            for (let i = 0; i < this.twists.length; i++) {
                if (this.twists[i] == twist) {
                    twist.finish();
                    this.twists.splice(i, 1);
                    break;
                }
            }
        }
        else {
            const twists = this.twists.splice(0);
            for (const twist of twists) {
                twist.finish();
            }
        }
    }
    cancel(twist) {
        for (let i = 0; i < this.twists.length; i++) {
            if (this.twists[i] == twist) {
                this.twists.splice(i, 1);
                break;
            }
        }
    }
    isTwisting() {
        return this.twists.length != 0;
    }
}
const twister = new Twister();


/***/ }),

/***/ "./src/cube/utils.ts":
/*!***************************!*\
  !*** ./src/cube/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube_config": () => (/* binding */ cube_config),
/* harmony export */   "cubelet_colors": () => (/* binding */ cubelet_colors),
/* harmony export */   "cubelet_defs": () => (/* binding */ cubelet_defs),
/* harmony export */   "cubelet_frame": () => (/* binding */ cubelet_frame),
/* harmony export */   "cubelet_lambers": () => (/* binding */ cubelet_lambers),
/* harmony export */   "cubelet_core": () => (/* binding */ cubelet_core),
/* harmony export */   "cubelet_sticker": () => (/* binding */ cubelet_sticker),
/* harmony export */   "cubelet_face_attrs": () => (/* binding */ cubelet_face_attrs),
/* harmony export */   "cube_size": () => (/* binding */ cube_size),
/* harmony export */   "axis_vectors": () => (/* binding */ axis_vectors),
/* harmony export */   "axis_planes": () => (/* binding */ axis_planes),
/* harmony export */   "indexToDirection": () => (/* binding */ indexToDirection),
/* harmony export */   "directionToIndex": () => (/* binding */ directionToIndex),
/* harmony export */   "indexToLayer": () => (/* binding */ indexToLayer),
/* harmony export */   "worldToIndex": () => (/* binding */ worldToIndex),
/* harmony export */   "facePostionBindings": () => (/* binding */ facePostionBindings),
/* harmony export */   "stringToTwistParams": () => (/* binding */ stringToTwistParams),
/* harmony export */   "lblOrderMapping": () => (/* binding */ lblOrderMapping),
/* harmony export */   "faceToColor": () => (/* binding */ faceToColor)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils_internal */ "./src/cube/utils_internal.ts");



const cube_config = {
    frames: 30,
    sensibility: 25 * 1e-4,
    scramble_steps: 20,
    solverId: 0,
};
const cubelet_colors = {
    R: "#B71C1C",
    L: "#FF6D00",
    U: "#F0F0F0",
    D: "#FFD600",
    F: "#00A020",
    B: "#0D47A1",
    core: "#202020",
    gray: "#808080",
    high: "#FF0080",
};
const cubelet_defs = {
    size: 64,
    _border_width: 3,
    _edge_width: 2,
    _sticker_depth: 0.1,
};
const cubelet_frame = new _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Frame(cubelet_defs.size, cubelet_defs._border_width);
const cubelet_lambers = (() => {
    const result = {};
    for (const key in cubelet_colors) {
        result[key] = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({ color: cubelet_colors[key] });
    }
    return result;
})();
const cubelet_core = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({
    color: cubelet_colors.core,
    specular: cubelet_colors.gray,
    shininess: 2,
});
const cubelet_sticker = new _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Sticker(cubelet_defs.size - 2 * cubelet_defs._border_width - cubelet_defs._edge_width, cubelet_defs._sticker_depth);
const cubelet_face_attrs = [
    {
        match: (vector) => { return vector.x == -1; },
        lambert: cubelet_lambers.L,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-cubelet_defs.size / 2, 0, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -Math.PI / 2, 0),
    },
    {
        match: (vector) => { return vector.x == 1; },
        lambert: cubelet_lambers.R,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(cubelet_defs.size / 2, 0, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, Math.PI / 2, 0),
    },
    {
        match: (vector) => { return vector.y == -1; },
        lambert: cubelet_lambers.D,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -cubelet_defs.size / 2, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.PI / 2, 0, 0),
    },
    {
        match: (vector) => { return vector.y == 1; },
        lambert: cubelet_lambers.U,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, cubelet_defs.size / 2, 0),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-Math.PI / 2, 0, 0),
    },
    {
        match: (vector) => { return vector.z == -1; },
        lambert: cubelet_lambers.B,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -cubelet_defs.size / 2),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(Math.PI, 0, 0),
    },
    {
        match: (vector) => { return vector.z == 1; },
        lambert: cubelet_lambers.F,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, cubelet_defs.size / 2),
        rotation: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2 * Math.PI, 0, 0),
    },
];
const cube_size = cubelet_defs.size * 3;
const axis_vectors = {
    a: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1),
    x: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-1, 0, 0),
    y: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0),
    z: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -1),
};
const axis_planes = {
    x: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0), -cube_size / 2),
    y: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), -cube_size / 2),
    z: new three__WEBPACK_IMPORTED_MODULE_1__.Plane(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1), -cube_size / 2)
};
const indexToDirection = (index) => {
    return new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(index % 3 - 1, Math.floor(index / 3) % 3 - 1, Math.floor(index / 9) - 1);
};
const directionToIndex = (drctn) => {
    return Math.round((drctn.x + 1) + (drctn.y + 1) * 3 + (drctn.z + 1) * 9);
};
const indexToLayer = (index) => {
    const result = { x: index % 3, y: Math.floor(index / 3) % 3, z: Math.floor(index / 9) };
    return result;
};
const worldToIndex = (point) => {
    const vector = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().copy(point);
    vector.add(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(cube_size / 2));
    vector.divideScalar(cube_size).multiplyScalar(3).floor();
    vector.max(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(0));
    vector.min(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3().setScalar(2));
    return vector.x + vector.y * 3 + vector.z * 9;
};
const facePostionBindings = [
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.L,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-1, 0, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.R,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 0, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.D,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.U,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.B,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, -1)
    },
    {
        face: _utils_internal__WEBPACK_IMPORTED_MODULE_0__.Face.F,
        position: new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 1)
    },
];
const stringToTwistParams = {
    "L": { axis: 'x', layers: [0], angle: -Math.PI / 2 },
    "L'": { axis: 'x', layers: [0], angle: Math.PI / 2 },
    "L2": { axis: 'x', layers: [0], angle: -Math.PI },
    "R": { axis: 'x', layers: [2], angle: Math.PI / 2 },
    "R'": { axis: 'x', layers: [2], angle: -Math.PI / 2 },
    "R2": { axis: 'x', layers: [2], angle: Math.PI },
    "F": { axis: 'z', layers: [2], angle: Math.PI / 2 },
    "F'": { axis: 'z', layers: [2], angle: -Math.PI / 2 },
    "F2": { axis: 'z', layers: [2], angle: Math.PI },
    "B": { axis: 'z', layers: [0], angle: -Math.PI / 2 },
    "B'": { axis: 'z', layers: [0], angle: Math.PI / 2 },
    "B2": { axis: 'z', layers: [0], angle: -Math.PI },
    "U": { axis: 'y', layers: [2], angle: Math.PI / 2 },
    "U'": { axis: 'y', layers: [2], angle: -Math.PI / 2 },
    "U2": { axis: 'y', layers: [2], angle: Math.PI },
    "D": { axis: 'y', layers: [0], angle: -Math.PI / 2 },
    "D'": { axis: 'y', layers: [0], angle: Math.PI / 2 },
    "D2": { axis: 'y', layers: [0], angle: -Math.PI },
    "~": { axis: 'a', layers: [], angle: 0 },
    "x": { axis: 'x', layers: [0, 1, 2], angle: Math.PI / 2 },
    "x'": { axis: 'x', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "x2": { axis: 'x', layers: [0, 1, 2], angle: Math.PI },
    "y": { axis: 'y', layers: [0, 1, 2], angle: Math.PI / 2 },
    "y'": { axis: 'y', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "y2": { axis: 'y', layers: [0, 1, 2], angle: Math.PI },
    "z": { axis: 'z', layers: [0, 1, 2], angle: Math.PI / 2 },
    "z'": { axis: 'z', layers: [0, 1, 2], angle: -Math.PI / 2 },
    "z2": { axis: 'z', layers: [0, 1, 2], angle: Math.PI },
    "l": { axis: 'x', layers: [0, 1], angle: -Math.PI / 2 },
    "l'": { axis: 'x', layers: [0, 1], angle: Math.PI / 2 },
    "l2": { axis: 'x', layers: [0, 1], angle: -Math.PI },
    "r": { axis: 'x', layers: [2, 1], angle: Math.PI / 2 },
    "r'": { axis: 'x', layers: [2, 1], angle: -Math.PI / 2 },
    "r2": { axis: 'x', layers: [2, 1], angle: Math.PI },
    "f": { axis: 'z', layers: [2, 1], angle: Math.PI / 2 },
    "f'": { axis: 'z', layers: [2, 1], angle: -Math.PI / 2 },
    "f2": { axis: 'z', layers: [2, 1], angle: Math.PI },
    "b": { axis: 'z', layers: [0, 1], angle: -Math.PI / 2 },
    "b'": { axis: 'z', layers: [0, 1], angle: Math.PI / 2 },
    "b2": { axis: 'z', layers: [0, 1], angle: -Math.PI },
    "u": { axis: 'y', layers: [2, 1], angle: Math.PI / 2 },
    "u'": { axis: 'y', layers: [2, 1], angle: -Math.PI / 2 },
    "u2": { axis: 'y', layers: [2, 1], angle: Math.PI },
    "d": { axis: 'y', layers: [0, 1], angle: -Math.PI / 2 },
    "d'": { axis: 'y', layers: [0, 1], angle: Math.PI / 2 },
    "d2": { axis: 'y', layers: [0, 1], angle: -Math.PI },
    "E": { axis: 'y', layers: [1], angle: -Math.PI / 2 },
    "E'": { axis: 'y', layers: [1], angle: Math.PI / 2 },
    "E2": { axis: 'y', layers: [1], angle: -Math.PI },
    "M": { axis: 'x', layers: [1], angle: -Math.PI / 2 },
    "M'": { axis: 'x', layers: [1], angle: Math.PI / 2 },
    "M2": { axis: 'x', layers: [1], angle: -Math.PI },
    "S": { axis: 'z', layers: [1], angle: Math.PI / 2 },
    "S'": { axis: 'z', layers: [1], angle: -Math.PI / 2 },
    "S2": { axis: 'z', layers: [1], angle: Math.PI },
};
const lblOrderMapping = {
    "U": "U",
    "u": "U'",
    "D": "D",
    "d": "D'",
    "F": "F",
    "f": "F'",
    "L": "L",
    "l": "L'",
    "R": "R",
    "r": "R'",
    "B": "B",
    "b": "B'",
    "Y": "y",
    "y": "y'"
};
const faceToColor = {
    "U": "w",
    "F": "g",
    "R": "r",
    "B": "b",
    "D": "y",
    "L": "o"
};


/***/ }),

/***/ "./src/cube/utils_internal.ts":
/*!************************************!*\
  !*** ./src/cube/utils_internal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Face": () => (/* binding */ Face),
/* harmony export */   "Frame": () => (/* binding */ Frame),
/* harmony export */   "Sticker": () => (/* binding */ Sticker)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

var Face;
(function (Face) {
    Face[Face["L"] = 0] = "L";
    Face[Face["R"] = 1] = "R";
    Face[Face["D"] = 2] = "D";
    Face[Face["U"] = 3] = "U";
    Face[Face["B"] = 4] = "B";
    Face[Face["F"] = 5] = "F";
})(Face || (Face = {}));
class Frame extends three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry {
    constructor(size, border) {
        super();
        const o = size / 2;
        const i = o - border;
        const _verts = [
            -i, +i, +o,
            +i, +i, +o,
            +i, -i, +o,
            -i, -i, +o,
            -i, +o, -i,
            +i, +o, -i,
            +i, +o, +i,
            -i, +o, +i,
            -o, -i, -i,
            -o, +i, -i,
            -o, +i, +i,
            -o, -i, +i,
            +i, +i, -o,
            -i, +i, -o,
            -i, -i, -o,
            +i, -i, -o,
            -i, -o, +i,
            +i, -o, +i,
            +i, -o, -i,
            -i, -o, -i,
            +o, +i, +i,
            +o, +i, -i,
            +o, -i, -i,
            +o, -i, +i,
        ];
        this.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(_verts, 3));
        this.setIndex(Frame._indices);
        this.computeVertexNormals();
    }
}
Frame._indices = [
    0, 2, 1,
    0, 3, 2,
    4, 6, 5,
    4, 7, 6,
    8, 10, 9,
    8, 11, 10,
    12, 14, 13,
    12, 15, 14,
    16, 18, 17,
    16, 19, 18,
    20, 22, 21,
    20, 23, 22,
    1, 6, 7,
    0, 1, 7,
    3, 0, 10,
    11, 3, 10,
    17, 2, 3,
    16, 17, 3,
    23, 20, 1,
    2, 23, 1,
    5, 12, 13,
    4, 5, 13,
    9, 13, 14,
    8, 9, 14,
    22, 15, 12,
    21, 22, 12,
    19, 14, 15,
    18, 19, 15,
    7, 4, 9,
    10, 7, 9,
    11, 8, 19,
    16, 11, 19,
    23, 17, 18,
    22, 23, 18,
    20, 21, 5,
    6, 20, 5,
    20, 6, 1,
    10, 0, 7,
    21, 12, 5,
    13, 9, 4,
    23, 2, 17,
    11, 16, 3,
    22, 18, 15,
    8, 14, 19,
];
class Sticker extends three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeGeometry {
    constructor(size, depth) {
        size = size / 2;
        const left = -size;
        const bottom = size;
        const top = -size;
        const right = size;
        const radius = size / 4;
        const shape = new three__WEBPACK_IMPORTED_MODULE_0__.Shape();
        shape.moveTo(left, top + radius);
        shape.lineTo(left, bottom - radius);
        shape.quadraticCurveTo(left, bottom, left + radius, bottom);
        shape.lineTo(right - radius, bottom);
        shape.quadraticCurveTo(right, bottom, right, bottom - radius);
        shape.lineTo(right, top + radius);
        shape.quadraticCurveTo(right, top, right - radius, top);
        shape.lineTo(left + radius, top);
        shape.quadraticCurveTo(left, top, left, top + radius);
        shape.closePath();
        super(shape, { bevelEnabled: false, depth: depth });
    }
}


/***/ }),

/***/ "./src/cube/world.ts":
/*!***************************!*\
  !*** ./src/cube/world.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/cube/controller.ts");
/* harmony import */ var _cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cube */ "./src/cube/cube.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/cube/utils.ts");





class World {
    constructor() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();
        this.scene.matrixAutoUpdate = false;
        this.scene.rotation.x = Math.PI / 6;
        this.scene.rotation.y = -Math.PI / 4 + Math.PI / 16;
        this.ambient = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.9);
        this.directional = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff, 0.1);
        this.directional.position.set(_utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size, _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3, _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 2);
        this.scene.add(this.ambient);
        this.scene.add(this.directional);
        this.scene.updateMatrix();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera();
        this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.cube = new _cube__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.scene.add(this.cube);
        this.dirty = true;
        this.scale = 1;
        this.perspective = 9;
    }
    set dirty(value) {
        this.cube.dirty = value;
    }
    get dirty() {
        return this.cube.dirty;
    }
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.updateCamera();
    }
    updateCamera() {
        const min = this.height / Math.min(this.width, this.height) / this.scale / this.perspective;
        const fov = (2 * Math.atan(min) * 180) / Math.PI;
        const distance = _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3 * this.perspective * 0.9;
        this.camera.aspect = this.width / this.height;
        this.camera.fov = fov;
        this.camera.position.z = distance;
        this.camera.near = distance - _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 3;
        this.camera.far = distance + _utils__WEBPACK_IMPORTED_MODULE_2__.cubelet_defs.size * 8;
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 30));
        this.camera.updateProjectionMatrix();
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ "./node_modules/material-design-icons/iconfont/material-icons.css");
/* harmony import */ var _vueapp_playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vueapp/playground */ "./src/vueapp/playground/index.ts");





vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vuetify__WEBPACK_IMPORTED_MODULE_4___default()));
const opts = {};
const vuetify = new (vuetify__WEBPACK_IMPORTED_MODULE_4___default())(opts);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.vuetify = vuetify;
let app = _vueapp_playground__WEBPACK_IMPORTED_MODULE_2__["default"];
const vm = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    vuetify,
    el: "#app",
    render: (h) => h(app),
});


/***/ }),

/***/ "./src/vueapp/playground/index.ts":
/*!****************************************!*\
  !*** ./src/vueapp/playground/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewport */ "./src/vueapp/viewport/index.ts");
/* harmony import */ var _cube_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cube/world */ "./src/cube/world.ts");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting */ "./src/vueapp/setting/index.ts");
/* harmony import */ var _cube_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cube/utils */ "./src/cube/utils.ts");
/* harmony import */ var _cube_twister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cube/twister */ "./src/cube/twister.ts");
/* harmony import */ var _cube_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cube/interactor */ "./src/cube/interactor.ts");
/* harmony import */ var _cube_capture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cube/capture */ "./src/cube/capture.ts");
/* harmony import */ var _cube_lbl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cube/lbl */ "./src/cube/lbl.ts");











let Playground = class Playground extends vue__WEBPACK_IMPORTED_MODULE_9__["default"] {
    constructor() {
        super();
        this.world = new _cube_world__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.solution = [];
        this.progress = 0;
        this.isPlayerMode = false;
        this.isPlaying = false;
        this.key = 0;
        this.initState = [];
        this.cubejsCube = __webpack_require__(/*! cubejs */ "./node_modules/cubejs/index.js");
        this.elapsedFrames = 0;
        this.elapsedFramesThreshold = 30;
        this.listd = false;
        this.capturer = new _cube_capture__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this.demoData = __webpack_require__(/*! ./demos.json */ "./src/vueapp/playground/demos.json");
        this.demoImages = [];
        this.demoGridWidth = 0;
        this.demoBackupState = [];
        this.isDemoMode = false;
        this.lblSolver = new _cube_lbl__WEBPACK_IMPORTED_MODULE_8__["default"]();
    }
    mounted() {
        this.cubejsCube.initSolver();
        this.interactor = new _cube_interactor__WEBPACK_IMPORTED_MODULE_6__["default"]([
            this.viewport.canvasElem,
            document.getElementById("top-flex"),
            document.getElementById("bottom-flex")
        ], this.world.controller.interact);
        for (let i = 0; i < this.demoData.length; i++) {
            this.demoImages.push(this.capturer.generate(this.demoData[i].state));
        }
        this.$nextTick(this.resize);
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop.bind(this));
        this.viewport.draw();
        this.callback();
    }
    resize() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.size = Math.ceil(Math.min(this.width / 6, this.height / 12));
        this.demoGridWidth = ~~(Math.min(this.size * 2, this.width / 4) * 100) / 100;
        this.viewport.resize(this.width, this.height - this.size * 3.5);
        this.world.cube.dirty = true;
    }
    scramble() {
        this.reset();
        this.world.cube.scramble();
    }
    reset() {
        this.world.cube.reset();
    }
    idle(value) {
        _cube_twister__WEBPACK_IMPORTED_MODULE_5__.twister.twists.push(new _cube_twister__WEBPACK_IMPORTED_MODULE_5__.Twist(0, Math.PI, _cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config.frames * value, (value) => {
            return Math.abs(value - Math.PI) < 1e-6;
        }));
    }
    solve() {
        this.isPlayerMode = true;
        this.initState = this.world.cube.serialize();
        const solverId = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.cube_config.solverId;
        if (solverId == 0) {
            const lblState = [];
            for (const faceState of this.initState) {
                lblState.push(_cube_utils__WEBPACK_IMPORTED_MODULE_4__.faceToColor[faceState]);
            }
            const lblSolution = this.lblSolver.solve(lblState).filter(Boolean);
            this.solution = [];
            for (const lblPhase of lblSolution) {
                const lblOrders = lblPhase.split("").filter(Boolean);
                for (const order of lblOrders) {
                    const step = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.lblOrderMapping[order];
                    if (step) {
                        this.solution.push(step);
                    }
                }
                this.solution.push("~");
            }
        }
        else if (solverId === 1) {
            this.solution = this.cubejsCube
                .fromString(this.initState)
                .solve()
                .split(' ').
                filter(Boolean);
            this.solution.push("~");
        }
        console.log(this.initState.join(""));
        console.log(this.solution.join(" "));
        this.setProgress(0);
        this.idle(0.5);
        this.isPlaying = true;
    }
    onPlayerModeChange() {
        this.world.controller.lock = this.isPlayerMode;
    }
    onPlayingChange() {
        this.world.controller.disable = this.isPlaying;
    }
    callback() {
        if (this.isPlayerMode && this.isPlaying) {
            if (this.progress == this.solution.length) {
                this.isPlaying = false;
            }
            if (this.progress < this.solution.length) {
                if (!_cube_twister__WEBPACK_IMPORTED_MODULE_5__.twister.isTwisting()) {
                    const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[this.solution[this.progress]];
                    for (const layer of params.layers) {
                        this.world.cube.table.groups[params.axis][layer].twist(params.angle, false);
                    }
                    this.progress++;
                }
            }
        }
        if (this.elapsedFrames < this.elapsedFramesThreshold) {
            this.elapsedFrames++;
        }
    }
    play() {
        if (this.progress == this.solution.length) {
            this.setProgress(0);
            this.idle(1.5);
        }
        this.isPlaying = true;
    }
    pause() {
        this.isPlaying = false;
    }
    quit() {
        this.isPlaying = false;
        this.isPlayerMode = false;
        if (this.isDemoMode) {
            this.isDemoMode = false;
            this.world.cube.restore(this.demoBackupState);
        }
    }
    setProgress(value) {
        this.isPlaying = false;
        this.world.cube.restore(this.initState);
        for (let i = 0; i < value; i++) {
            const params = _cube_utils__WEBPACK_IMPORTED_MODULE_4__.stringToTwistParams[this.solution[i]];
            for (const layer of params.layers) {
                this.world.cube.table.groups[params.axis][layer].twist(params.angle, true);
            }
        }
        this.progress = value;
    }
    greenButton() {
        if (this.elapsedFrames < this.elapsedFramesThreshold) {
            return;
        }
        this.elapsedFrames = 0;
        if (!this.isPlayerMode) {
            this.scramble();
        }
        else {
            this.play();
        }
    }
    blueButton() {
        if (this.elapsedFrames < this.elapsedFramesThreshold) {
            return;
        }
        this.elapsedFrames = 0;
        if (!this.isPlayerMode) {
            this.reset();
        }
        else {
            this.pause();
        }
    }
    redButton() {
        if (this.elapsedFrames < this.elapsedFramesThreshold) {
            return;
        }
        this.elapsedFrames = 0;
        if (!this.isPlayerMode) {
            this.solve();
        }
        else {
            this.quit();
        }
    }
    selectDemo(idx) {
        this.listd = false;
        if (!this.isDemoMode) {
            this.demoBackupState = this.world.cube.serialize();
        }
        this.isDemoMode = true;
        this.isPlayerMode = true;
        this.demoName = this.demoData[idx].name;
        this.initState = this.demoData[idx].state.split("");
        this.solution = this.demoData[idx].solution.split(' ').filter(Boolean);
        this.solution.push("~");
        console.log(this.initState.join(""));
        console.log(this.solution.join(" "));
        this.setProgress(0);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Provide)("world"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:type", Object)
], Playground.prototype, "world", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Ref)("viewport"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:type", _viewport__WEBPACK_IMPORTED_MODULE_1__["default"])
], Playground.prototype, "viewport", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("isPlayerMode"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:returntype", void 0)
], Playground.prototype, "onPlayerModeChange", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Watch)("isPlaying"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:returntype", void 0)
], Playground.prototype, "onPlayingChange", null);
Playground = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/playground/index.html"),
        components: {
            viewport: _viewport__WEBPACK_IMPORTED_MODULE_1__["default"],
            setting: _setting__WEBPACK_IMPORTED_MODULE_3__["default"],
        },
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__metadata)("design:paramtypes", [])
], Playground);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playground);


/***/ }),

/***/ "./src/vueapp/setting/index.ts":
/*!*************************************!*\
  !*** ./src/vueapp/setting/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var _cube_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cube/utils */ "./src/cube/utils.ts");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slider-component/theme/default.css */ "./node_modules/vue-slider-component/theme/default.css");






let Setting = class Setting extends vue__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
        this.size = 0;
        this.state = false;
    }
    mounted() {
        this.resize();
    }
    resize() {
        this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight;
        this.size = Math.ceil(Math.min(this.width / 6, this.height / 12));
    }
    get sensibility() {
        return _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility * 1e4;
    }
    set sensibility(value) {
        _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.sensibility = value * 1e-4;
    }
    get frames() {
        return _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.frames;
    }
    set frames(value) {
        _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.frames = value;
    }
    get scramble_steps() {
        return _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.scramble_steps;
    }
    set scramble_steps(value) {
        _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.scramble_steps = value;
    }
    get solver_id() {
        return _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.solverId;
    }
    set solver_id(value) {
        _cube_utils__WEBPACK_IMPORTED_MODULE_1__.cube_config.solverId = value;
    }
};
Setting = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/setting/index.html"),
        components: {
            VueSlider: (vue_slider_component__WEBPACK_IMPORTED_MODULE_2___default())
        }
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__metadata)("design:paramtypes", [])
], Setting);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);


/***/ }),

/***/ "./src/vueapp/viewport/index.ts":
/*!**************************************!*\
  !*** ./src/vueapp/viewport/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cube_world__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cube/world */ "./src/cube/world.ts");





let Viewport = class Viewport extends vue__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor() {
        super();
        const canvasElem = document.createElement("canvas");
        canvasElem.style.outline = "none";
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
            canvas: canvasElem,
            antialias: true,
            alpha: true
        });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0, 0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.canvasElem = canvasElem;
    }
    resize(width, height) {
        this.world.resize(width, height);
        this.renderer.setSize(width, height, true);
    }
    mounted() {
        this.canvas.appendChild(this.renderer.domElement);
    }
    draw() {
        if (this.world.dirty) {
            this.renderer.render(this.world.scene, this.world.camera);
            this.world.dirty = false;
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Inject)("world"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", _cube_world__WEBPACK_IMPORTED_MODULE_1__["default"])
], Viewport.prototype, "world", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Ref)("canvas"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:type", HTMLElement)
], Viewport.prototype, "canvas", void 0);
Viewport = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)({
        template: __webpack_require__(/*! ./index.html */ "./src/vueapp/viewport/index.html"),
        components: {},
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [])
], Viewport);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viewport);


/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC":
/*!******************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC ***!
  \******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/vueapp/playground/demos.json":
/*!******************************************!*\
  !*** ./src/vueapp/playground/demos.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"LBL-101","state":"?U?UU??U????UB?????R??RB?????????????F??F?????L??L????","solution":"U F\' U\'"},{"name":"LBL-201","state":"????????RU???R??RR??B?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"R U R\'"},{"name":"LBL-202","state":"????????BR???R??RR??U?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"F\' U\' F"},{"name":"LBL-203","state":"????????UB???R??RR??R?B?BB?UU?UUUUUU????L?LLL????F?FFF","solution":"F\' U F R U2 R\'"},{"name":"LBL-204","state":"?????????????R?URR????B?BBRUUBUUUUUU????L?LLL????F?FFF","solution":"F\' U F R U R\'"},{"name":"LBL-205","state":"?????????????R?BRR????B?BBUUURUUUUUU????L?LLL????F?FFF","solution":"R U\' R\' F\' U\' F"},{"name":"LBL-301","state":"????DB????R??R?RRR????B?BBBUUUUUUUUU????L?LLL????F?FFF","solution":"R\' U\' R\' U\' R\' U R U R"},{"name":"LBL-302","state":"????D??R?????R?RRR?B??B?BBBUUUUUUUUU????L?LLL????F?FFF","solution":"F U F U F U\' F\' U\' F\'"},{"name":"LBL-303","state":"????D???????BR?RRR????BRBBBUUUUUUUUU????L?LLL????F?FFF","solution":"F U F U F U\' F\' U\' F\' U R\' U\' R\' U\' R\' U R U R"},{"name":"LBL-401","state":"?D?DD?????D?RRRRRR?D?BBBBBBUUUUUUUUU???LLLLLL???FFFFFF","solution":"R\' U\' F\' U F R"},{"name":"LBL-402","state":"?D??D??D??D?RRRRRR???BBBBBBUUUUUUUUU?D?LLLLLL???FFFFFF","solution":"R\' F\' U\' F U R"},{"name":"LBL-403","state":"????D?????D?RRRRRR?D?BBBBBBUUUUUUUUU?D?LLLLLL?D?FFFFFF","solution":"R\' U\' F\' U F R U R\' F\' U\' F U R"},{"name":"LBL-501","state":"DD?DDD?D?D??RRRRRRD??BBBBBBUUUUUUUUU???LLLLLLD??FFFFFF","solution":"R\' U L U\' R U L\' U\'"},{"name":"LBL-502","state":"DD?DDD?D???DRRRRRR??DBBBBBBUUUUUUUUU??DLLLLLL???FFFFFF","solution":"U L U\' R\' U L\' U\' R"},{"name":"LBL-601","state":"DDDDDDDDD?B?RRRRRR?L?BBBBBBUUUUUUUUU?R?LLLLLL?F?FFFFFF","solution":"F2 U R\' L F2 R L\' U F2"},{"name":"LBL-602","state":"DDDDDDDDD?L?RRRRRR?R?BBBBBBUUUUUUUUU?B?LLLLLL?F?FFFFFF","solution":"F2 U\' R\' L F2 R L\' U\' F2"},{"name":"LBL-701","state":"DDDDDDDDDFRFRRRRRRBBRBBBBBBUUUUUUUUURLLLLLLLLLFBFFFFFF","solution":"R2 B2 R F R\' B2 R F\' R"},{"name":"LBL-702","state":"DDDDDDDDDRRLRRRRRRLBBBBBBBBUUUUUUUUUFLFLLLLLLBFRFFFFFF","solution":"L2 B2 L\' F\' L B2 L\' F L\'"},{"name":"LBL-703","state":"DDDDDDDDDLRLRRRRRRFBFBBBBBBUUUUUUUUURLRLLLLLLBFBFFFFFF","solution":"R2 B2 R F R\' B2 R F\' R U R2 B2 R F R\' B2 R F\' R U\'"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrubikscube"] = self["webpackChunkrubikscube"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvdnVlYXBwL3BsYXlncm91bmQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC9zZXR0aW5nL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvdmlld3BvcnQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY2FwdHVyZS50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY3ViZS50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvY3ViZWxldC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2ludGVyYWN0b3IudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL2xibC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvdHdpc3Rlci50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2N1YmUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy9jdWJlL3V0aWxzX2ludGVybmFsLnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvY3ViZS93b3JsZC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvLi9zcmMvdnVlYXBwL3BsYXlncm91bmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS8uL3NyYy92dWVhcHAvc2V0dGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlLy4vc3JjL3Z1ZWFwcC92aWV3cG9ydC9pbmRleC50cyIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9ydWJpa3NjdWJlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnViaWtzY3ViZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3J1Ymlrc2N1YmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8di1hcHA+XFxuICAgIDxkaXYgdi1yZXNpemU9XFxcInJlc2l6ZVxcXCIgc3R5bGU9XFxcInVzZXItc2VsZWN0OiBub25lOyB0b3VjaC1hY3Rpb246IG5vbmU7XFxcIj5cXG4gICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCdcXG4gICAgICAgICAgICB9XFxcIiBpZD1cXFwidG9wLWZsZXhcXFwiPjwvdi1mbGV4PlxcblxcbiAgICAgICAgPHYtYnRuIGZpeGVkIHJpZ2h0IHRvcCBmYWIgY29sb3I9XFxcInByaW1hcnlcXFwiIHN0eWxlPVxcXCJ1c2VyLXNlbGVjdDogbm9uZTtcXFwiIDpzdHlsZT1cXFwie1xcbiAgICAgICAgd2lkdGg6IHNpemUgKiAwLjkgKyAncHgnLCBcXG4gICAgICAgIGhlaWdodDogc2l6ZSAqIDAuOSArICdweCcsIFxcbiAgICAgICAgJ21hcmdpbi1yaWdodCc6IHdpZHRoIC8gMiAtIE1hdGgubWluKHNpemUgKiA0LCB3aWR0aCAvIDIpICsgc2l6ZSAqIDEuMSArICdweCd9XFxcIiBAY2xpY2s9XFxcImxpc3RkPSFsaXN0ZFxcXCI+XFxuICAgICAgICAgICAgPHYtaWNvbiA6c2l6ZT1cXFwic2l6ZSAqIDAuNlxcXCI+XFxuICAgICAgICAgICAgICAgIHNjaG9vbFxcbiAgICAgICAgICAgIDwvdi1pY29uPlxcbiAgICAgICAgPC92LWJ0bj5cXG5cXG4gICAgICAgIDx2LWJ0biBmaXhlZCBsZWZ0IHRvcCB0ZXh0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcIntoZWlnaHQ6IHNpemUrJ3B4JywgJ21hcmdpbi1sZWZ0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMiAtIHNpemUgLyA0KSArICdweCd9XFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwibGlzdGQ9dHJ1ZVxcXCIgdi1pZj1cXFwiaXNEZW1vTW9kZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiA6c3R5bGU9XFxcInsnZm9udC1zaXplJzooc2l6ZSAqIDAuNCkrJ3B4J31cXFwiIHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXFwiPnt7IGRlbW9OYW1lIH19PC9kaXY+XFxuICAgICAgICA8L3YtYnRuPlxcblxcbiAgICAgICAgPHYtYm90dG9tLXNoZWV0IHYtbW9kZWw9XFxcImxpc3RkXFxcIj5cXG4gICAgICAgICAgICA8di1jYXJkIHRleHQgc3R5bGU9XFxcIm1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCI+XFxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lciBmbHVpZCBncmlkLWxpc3QtbWQgdGV4dC14cy1jZW50ZXIgc3R5bGU9XFxcInBhZGRpbmc6IDAlO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogMTAsIHdpZHRoKSArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LWxheW91dCByb3cgd3JhcFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTsgbWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtY2FyZCBzdHlsZT1cXFwibWFyZ2luOiAwJTsgcGFkZGluZzogMCU7XFxcIiA6c3R5bGU9XFxcInsnd2lkdGgnOiBkZW1vR3JpZFdpZHRoICArICdweCd9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGRlbW9JbWFnZSwgaSkgaW4gZGVtb0ltYWdlc1xcXCIgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0biBibG9jayB0ZXh0IGNvbG9yPVxcXCJwcmltYXJ5XFxcIiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBzaXplICogMC4zICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBzaXplICogMC4zNSArICdweCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcXCIgc3R5bGU9XFxcInRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xcXCIgQGNsaWNrPVxcXCJzZWxlY3REZW1vKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRlbW9EYXRhW2ldLm5hbWUgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJkZW1vSW1hZ2VcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInsnd2lkdGgnOmRlbW9HcmlkV2lkdGggICsgJ3B4J31cXFwiIEBjbGljaz1cXFwic2VsZWN0RGVtbyhpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LWNhcmQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3YtbGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgICAgIDwvdi1jYXJkPlxcbiAgICAgICAgPC92LWJvdHRvbS1zaGVldD5cXG5cXG4gICAgICAgIDxzZXR0aW5nIHJlZj1cXFwic2V0dGluZ1xcXCI+PC9zZXR0aW5nPlxcbiAgICAgICAgPHZpZXdwb3J0IHJlZj1cXFwidmlld3BvcnRcXFwiPjwvdmlld3BvcnQ+XFxuICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOnNpemUgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICdub25lJyxcXG4gICAgICAgICAgICAgICAgJ21hcmdpbic6ICdub25lJ1xcbiAgICAgICAgICAgIH1cXFwiIGlkPVxcXCJib3R0b20tZmxleFxcXCIgdi1zaG93PVxcXCIhaXNQbGF5ZXJNb2RlXFxcIj5cXG4gICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgPHYtY2FyZCBmbGF0IHN0eWxlPVxcXCJtYXJnaW46IGF1dG87IHRvdWNoLWFjdGlvbjogbm9uZTsgdXNlci1zZWxlY3Q6IG5vbmU7XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyXFxuICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogOCwgd2lkdGgpICsgJ3B4JywgaGVpZ2h0OiBzaXplICogNCArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHYtbGF5b3V0IHJvdyB3cmFwPlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czEyIDpzdHlsZT1cXFwie1xcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IHNpemUgKyAncHgnXFxuICAgICAgICAgICAgICAgIH1cXFwiIHYtaWY9XFxcImlzUGxheWVyTW9kZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtc2xpZGVyIDp2YWx1ZT1cXFwicHJvZ3Jlc3NcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDptYXg9XFxcInNvbHV0aW9uLmxlbmd0aFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpY2stc2l6ZT1cXFwiM1xcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgdGlja3M9XFxcImFsd2F5c1xcXCIgaGlkZS1kZXRhaWxzIHYtb246aW5wdXQ9XFxcInNldFByb2dyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDp0aHVtYi1sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2dyZXNzID09IDAgPyAnIycgOiBzb2x1dGlvbltwcm9ncmVzcyAtIDFdIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXNsaWRlcj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICAgICAgPHYtZmxleCB4czQgOnN0eWxlPVxcXCJ7cGFkZGluZzogc2l6ZSAqIDAuMDYgKyAncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cXFwiZ3JlZW5CdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcImdyZWVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICFpc1BsYXllck1vZGUgPyAnU2NyYW1ibGUnIDogKHByb2dyZXNzID09IHNvbHV0aW9uLmxlbmd0aCA/ICdSZXBsYXknIDogJ1BsYXknKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJibHVlQnV0dG9uXFxcIiBibG9jayB0ZXh0IGNvbG9yPVxcXCJibHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwibWluLXdpZHRoOiAwJTsgbWluLWhlaWdodDogMCU7IG1hcmdpbjogMCU7IHBhZGRpbmc6IDAlO1xcXCIgOmhlaWdodD1cXFwic2l6ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOnN0eWxlPVxcXCJ7J2ZvbnQtc2l6ZSc6IHNpemUgKiAwLjMgKydweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICFpc1BsYXllck1vZGUgPyAnUmVzZXQnIDogJ1BhdXNlJyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgICAgICA8di1mbGV4IHhzNCA6c3R5bGU9XFxcIntwYWRkaW5nOiBzaXplICogMC4wNiArICdweCd9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1idG4gQGNsaWNrPVxcXCJyZWRCdXR0b25cXFwiIGJsb2NrIHRleHQgY29sb3I9XFxcInJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1pbi13aWR0aDogMCU7IG1pbi1oZWlnaHQ6IDAlOyBtYXJnaW46IDAlOyBwYWRkaW5nOiAwJTtcXFwiIDpoZWlnaHQ9XFxcInNpemVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDpzdHlsZT1cXFwieydmb250LXNpemUnOiBzaXplICogMC4zICsncHgnfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAhaXNQbGF5ZXJNb2RlID8gJ1NvbHZlJyA6ICdRdWl0JyB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LWZsZXg+XFxuICAgICAgICAgICAgICAgIDwvdi1sYXlvdXQ+XFxuICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cXG4gICAgICAgIDwvdi1jYXJkPlxcbiAgICA8L2Rpdj5cXG48L3YtYXBwPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgdi1yZXNpemU9XFxcInJlc2l6ZVxcXCI+XFxuICAgIDx2LWJ0biBmaXhlZCByaWdodCB0b3AgZmFiIGNvbG9yPVxcXCJwcmltYXJ5XFxcIiBzdHlsZT1cXFwidXNlci1zZWxlY3Q6IG5vbmU7XFxcIlxcbiAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IHNpemUgKiAwLjkgKyAncHgnLCBoZWlnaHQ6IHNpemUgKiAwLjkgKyAncHgnLCAnbWFyZ2luLXJpZ2h0Jzogd2lkdGggLyAyIC0gTWF0aC5taW4oc2l6ZSAqIDQsIHdpZHRoIC8gMikgKyAncHgnfVxcXCJcXG4gICAgICAgIEBjbGljaz1cXFwic3RhdGUgPSAhc3RhdGVcXFwiPlxcbiAgICAgICAgPHYtaWNvbiA6c2l6ZT1cXFwic2l6ZSAqIDAuNlxcXCI+XFxuICAgICAgICAgICAgc2V0dGluZ3NcXG4gICAgICAgIDwvdi1pY29uPlxcbiAgICA8L3YtYnRuPlxcbiAgICA8di1ib3R0b20tc2hlZXQgdi1tb2RlbD1cXFwic3RhdGVcXFwiPlxcbiAgICAgICAgPHYtY2FyZCB0ZXh0IHN0eWxlPVxcXCJtYXJnaW46IGF1dG87XFxcIj5cXG4gICAgICAgICAgICA8di1jb250YWluZXIgZmx1aWQgZ3JpZC1saXN0LW1kIHRleHQteHMtY2VudGVyIDpzdHlsZT1cXFwie3dpZHRoOiBNYXRoLm1pbihzaXplICogOCwgd2lkdGgpICsgJ3B4J31cXFwiPlxcbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgICAgICBTT0xWSU5HIEFMR09SSVRITVxcbiAgICAgICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2LXJhZGlvLWdyb3VwIHYtbW9kZWw9XFxcInNvbHZlcl9pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtcmFkaW8gbGFiZWw9XFxcIkxheWVyIEJ5IExheWVyIE1ldGhvZFxcXCIgOnZhbHVlPVxcXCIwXFxcIiBvZmYtaWNvbj1cXFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFxcXCIgb24taWNvbj1cXFwicmFkaW9fYnV0dG9uX2NoZWNrZWRcXFwiPjwvdi1yYWRpbz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8di1yYWRpbyBsYWJlbD1cXFwiS29jaWVtYmEncyBBbGdvcml0aG1cXFwiIDp2YWx1ZT1cXFwiMVxcXCIgb2ZmLWljb249XFxcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcXFwiICBvbi1pY29uPVxcXCJyYWRpb19idXR0b25fY2hlY2tlZFxcXCIgOnN0eWxlPVxcXCJ7ICdtYXJnaW4tdG9wJyA6IHNpemUgKiAwLjIgKyAncHgnfVxcXCI+PC92LXJhZGlvPlxcbiAgICAgICAgICAgICAgICAgICAgPC92LXJhZGlvLWdyb3VwPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgU0NSQU1CTEUgTEVOR1RIXFxuICAgICAgICAgICAgICAgIDwvdi1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx2LWZsZXggeHMxMiA6c3R5bGU9XFxcIntcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLWxlZnQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1yaWdodCc6IHNpemUgLyAyICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdwYWRkaW5nLXRvcCc6IHNpemUgKiAwLjIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IChzaXplICogMC4zKSArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzpzaXplICsgJ3B4J1xcbiAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx2dWUtc2xpZGVyIHYtbW9kZWw9XFxcInNjcmFtYmxlX3N0ZXBzXFxcIiB0aHVtYi1sYWJlbD1cXFwiYWx3YXlzXFxcIiA6bWF4PVxcXCI0MFxcXCIgOm1pbj1cXFwiMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6bWFya3M9XFxcIlswLDEwLDIwLDMwLDQwXVxcXCI+PC92dWUtc2xpZGVyPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICAgICAgPHYtc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgRlJBTUVTIFBFUiBUV0lTVFxcbiAgICAgICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy10b3AnOiBzaXplICogMC4yICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAoc2l6ZSAqIDAuMykgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCdcXG4gICAgICAgICAgICAgICAgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dnVlLXNsaWRlciB2LW1vZGVsPVxcXCJmcmFtZXNcXFwiIHRodW1iLWxhYmVsPVxcXCJhbHdheXNcXFwiIDptYXg9XFxcIjYwXFxcIiA6bWluPVxcXCIwXFxcIiA6bWFya3M9XFxcIlswLDE1LDMwLDQ1LDYwXVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zbGlkZXI+XFxuICAgICAgICAgICAgICAgIDwvdi1mbGV4PlxcbiAgICAgICAgICAgICAgICA8di1zdWJoZWFkZXI+XFxuICAgICAgICAgICAgICAgICAgICBTRU5TSVRJVklUWVxcbiAgICAgICAgICAgICAgICA8L3Ytc3ViaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8di1mbGV4IHhzMTIgOnN0eWxlPVxcXCJ7XFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy1sZWZ0Jzogc2l6ZSAvIDIgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiBzaXplIC8gMiArICdweCcsXFxuICAgICAgICAgICAgICAgICAgICAncGFkZGluZy10b3AnOiBzaXplICogMC4yICsgJ3B4JyxcXG4gICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiAoc2l6ZSAqIDAuMykgKyAncHgnLFxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6c2l6ZSArICdweCdcXG4gICAgICAgICAgICAgICAgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dnVlLXNsaWRlciB2LW1vZGVsPVxcXCJzZW5zaWJpbGl0eVxcXCIgdGh1bWItbGFiZWw9XFxcImFsd2F5c1xcXCIgOm1heD1cXFwiMTAwXFxcIiA6bWluPVxcXCIwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDptYXJrcz1cXFwiWzAsMjUsNTAsNzUsMTAwXVxcXCI+PC92dWUtc2xpZGVyPlxcbiAgICAgICAgICAgICAgICA8L3YtZmxleD5cXG4gICAgICAgICAgICA8L3YtY29udGFpbmVyPlxcbiAgICAgICAgPC92LWNhcmQ+XFxuICAgIDwvdi1ib3R0b20tc2hlZXQ+XFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiByZWY9XFxcImNhbnZhc1xcXCI+PC9kaXY+XCIiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXb3JsZCBmcm9tIFwiLi93b3JsZFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FwdHVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDAsIDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oMSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSgyNTYsIDI1NiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMud29ybGQucmVzaXplKDI1NiwgMjU2KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZShcIj8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcbiAgICB9XG4gICAgZ2VuZXJhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUoc3RhdGUuc3BsaXQoXCJcIikpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLnNjZW5lLCB0aGlzLndvcmxkLmNhbWVyYSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQudG9EYXRhVVJMKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyB0d2lzdGVyIH0gZnJvbSBcIi4vdHdpc3RlclwiO1xuaW1wb3J0IHsgYXhpc19wbGFuZXMsIGF4aXNfdmVjdG9ycywgY3ViZV9jb25maWcsIGN1YmVfc2l6ZSwgaW5kZXhUb0xheWVyLCB3b3JsZFRvSW5kZXggfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgQm94MywgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuZXhwb3J0IGNsYXNzIEhvbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmF4aXMgPSBcIlwiO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHdvcmxkKSB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3QgPSAoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoc3RhcnRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibW91c2Vkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bi54ID0gYWN0aW9uLng7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bi55ID0gYWN0aW9uLnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bl90aWNrID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibW91c2Vtb3ZlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUueCA9IGFjdGlvbi54O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmUueSA9IGFjdGlvbi55O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoZW5kXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoY2FuY2VsXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1vdXNldXBcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibW91c2VvdXRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fbG9jayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kaXNhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdGF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXhpcyA9IFwiXCI7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmNvbnRpbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuZG93biA9IG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApO1xuICAgICAgICB0aGlzLm1vdmUgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcbiAgICAgICAgdGhpcy5kb3duX3RpY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5ob2xkZXIgPSBuZXcgSG9sZGVyKCk7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgc2V0IGxvY2sodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB0aGlzLl9sb2NrID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBsb2NrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jaztcbiAgICB9XG4gICAgc2V0IGRpc2FibGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBkaXNhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuY29udGluZ2xlICsgdGhpcy5hbmdsZTtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXAuYW5nbGUgIT0gYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAoYW5nbGUgLSB0aGlzLmdyb3VwLmFuZ2xlKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXAuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBzID0gdGhpcy53b3JsZC5jdWJlLnRhYmxlLmdyb3Vwc1t0aGlzLmF4aXNdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChncm91cC5hbmdsZSAhPSBhbmdsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAoYW5nbGUgLSBncm91cC5hbmdsZSkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYW5nbGUgKz0gZGVsdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0Y2goKSB7XG4gICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgIGNvbnN0IGZpbmdlciA9IHRoaXMuaG9sZGVyLnZlY3RvcjtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhvbGRlci5pbmRleDtcbiAgICAgICAgY29uc3QgaWxheWVyID0gaW5kZXhUb0xheWVyKGluZGV4KTtcbiAgICAgICAgZm9yIChjb25zdCBheGlzIG9mIFtcInhcIiwgXCJ5XCIsIFwielwiXSkge1xuICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gYXhpc192ZWN0b3JzW2F4aXNdO1xuICAgICAgICAgICAgaWYgKHZlY3Rvci5kb3QocGxhbmUubm9ybWFsKSA9PT0gMCAmJiB2ZWN0b3IuZG90KGZpbmdlcikgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53b3JsZC5jdWJlLnRhYmxlLmdyb3Vwc1theGlzXVtpbGF5ZXJbYXhpc11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpbnRlcnNlY3QocG9pbnQsIHBsYW5lKSB7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG4gICAgICAgIGNvbnN0IHJheSA9IG5ldyBUSFJFRS5SYXkoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgY29uc3QgeCA9IChwb2ludC54IC8gdGhpcy53b3JsZC53aWR0aCkgKiAyIC0gMTtcbiAgICAgICAgY29uc3QgeSA9IC0ocG9pbnQueSAvIHRoaXMud29ybGQuaGVpZ2h0KSAqIDIgKyAxO1xuICAgICAgICBtYXRyaXguY29weSh0aGlzLndvcmxkLnNjZW5lLm1hdHJpeCk7XG4gICAgICAgIG1hdHJpeC5pbnZlcnQoKTtcbiAgICAgICAgcmF5Lm9yaWdpbi5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy53b3JsZC5jYW1lcmEubWF0cml4V29ybGQpO1xuICAgICAgICByYXkuZGlyZWN0aW9uLnNldCh4LCB5LCAwLjUpLnVucHJvamVjdCh0aGlzLndvcmxkLmNhbWVyYSkuc3ViKHJheS5vcmlnaW4pLm5vcm1hbGl6ZSgpO1xuICAgICAgICByYXkuYXBwbHlNYXRyaXg0KG1hdHJpeCk7XG4gICAgICAgIHJheS5pbnRlcnNlY3RQbGFuZShwbGFuZSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaGFuZGxlRG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nIHx8IHRoaXMucm90YXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob2xkZXIuaW5kZXggPSAtMTtcbiAgICAgICAgbGV0IG1pbl9kaXN0ID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbXCJ4XCIsIFwieVwiLCBcInpcIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbYXhpc107XG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuaW50ZXJzZWN0KHRoaXMuZG93biwgcGxhbmUpO1xuICAgICAgICAgICAgaWYgKHBvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZV9tYXJnaW4gPSBjdWJlX3NpemUgLyAyICsgMC4wMDE7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94TWluID0gbmV3IFZlY3RvcjMoKS5zZXRTY2FsYXIoLWN1YmVfbWFyZ2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3hNYXggPSBuZXcgVmVjdG9yMygpLnNldFNjYWxhcihjdWJlX21hcmdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gbmV3IEJveDMoYm94TWluLCBib3hNYXgpO1xuICAgICAgICAgICAgICAgIGlmIChib3guY29udGFpbnNQb2ludChwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKS5zZXRGcm9tTWF0cml4UG9zaXRpb24odGhpcy53b3JsZC5jYW1lcmEubWF0cml4V29ybGQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gcG9pbnQuZGlzdGFuY2VUbyhvcmlnaW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbl9kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5fZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGRlci5heGlzID0gYXhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZGVyLmluZGV4ID0gd29ybGRUb0luZGV4KHBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVNb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gdGhpcy5tb3ZlLnggLSB0aGlzLmRvd24ueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy5tb3ZlLnkgLSB0aGlzLmRvd24ueTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgaWYgKE1hdGgubWluKHRoaXMud29ybGQud2lkdGgsIHRoaXMud29ybGQuaGVpZ2h0KSAvIGQgPiAxMjgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhvbGRlci5pbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpcyA9IFwieVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG93bi54IDwgdGhpcy53b3JsZC53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpcyA9IFwieFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzID0gXCJ6XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGluZ2xlX3NldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMud29ybGQuY3ViZS50YWJsZS5ncm91cHNbdGhpcy5heGlzXSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VjY2VzcyA9IGdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2lzdGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW5nbGVfc2V0LmFkZChncm91cC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb250aW5nbGVfc2V0LnNpemUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGNvbnRpbmdsZV9zZXQudmFsdWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGluZ2xlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250aW5nbGUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmludGVyc2VjdCh0aGlzLmRvd24sIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmludGVyc2VjdCh0aGlzLm1vdmUsIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpLnN1YlZlY3RvcnMoZW5kLCBzdGFydCk7XG4gICAgICAgICAgICAgICAgdmVjdG9yLm1heChuZXcgVmVjdG9yMygpLnN1Yih2ZWN0b3IpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtID0gTWF0aC5tYXgodmVjdG9yLngsIHZlY3Rvci55LCB2ZWN0b3Iueik7XG4gICAgICAgICAgICAgICAgdGhpcy5ob2xkZXIudmVjdG9yLmNvcHkobm9ybSA9PSB2ZWN0b3IueCA/IG5ldyBWZWN0b3IzKDEsIDAsIDApIDogKG5vcm0gPT0gdmVjdG9yLnkgPyBuZXcgVmVjdG9yMygwLCAxLCAwKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDAsIDEpKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cCA9IHRoaXMubWF0Y2goKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3RhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBzdWNjZXNzID0gdGhpcy5ncm91cC5kcmFnKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHR3aXN0ZXIuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmdyb3VwLmRyYWcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb250aW5nbGUgPSB0aGlzLmdyb3VwLmFuZ2xlO1xuICAgICAgICAgICAgICAgIHZlY3Rvci5jcm9zc1ZlY3RvcnModGhpcy5ob2xkZXIudmVjdG9yLCBwbGFuZS5ub3JtYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9sZGVyLnZlY3Rvci5tdWx0aXBseVNjYWxhcih2ZWN0b3IueCArIHZlY3Rvci55ICsgdmVjdG9yLnopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5lID0gYXhpc19wbGFuZXNbdGhpcy5ob2xkZXIuYXhpc107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmludGVyc2VjdCh0aGlzLmRvd24sIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSB0aGlzLmludGVyc2VjdCh0aGlzLm1vdmUsIHBsYW5lKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpLnN1YlZlY3RvcnMoZW5kLCBzdGFydCk7XG4gICAgICAgICAgICAgICAgdmVjdG9yLm11bHRpcGx5KHRoaXMuaG9sZGVyLnZlY3Rvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9XG4gICAgICAgICAgICAgICAgICAgICh2ZWN0b3IueCArIHZlY3Rvci55ICsgdmVjdG9yLnopICpcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmVfY29uZmlnLnNlbnNpYmlsaXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSB0aGlzLm1vdmUueCAtIHRoaXMuZG93bi54O1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gdGhpcy5tb3ZlLnkgLSB0aGlzLmRvd24ueTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gY3ViZV9jb25maWcuc2Vuc2liaWxpdHkgKiAodGhpcy5heGlzID09IFwieVwiID8gLWR4IDpcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYXhpcyA9PSBcInhcIiA/IC1keSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoZHkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlVXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW5nKSB7XG4gICAgICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmFuZ2xlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxvY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYW5nbGUpIDwgTWF0aC5QSSAvIDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAoTWF0aC5hYnMoYW5nbGUpIC8gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5kb3duX3RpY2spKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGVlZCA+IDAuMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSA9PSAwID8gMCA6ICgoYW5nbGUgLyBNYXRoLmFicyhhbmdsZSkpICogKE1hdGguUEkgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSArIHRoaXMuY29udGluZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5nbGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwLnR3aXN0KGFuZ2xlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cHMgPSB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3RoaXMuYXhpc107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAudHdpc3QoYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZGVyLmluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3RhdGluZyA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IEN1YmVsZXQgZnJvbSBcIi4vY3ViZWxldFwiO1xuaW1wb3J0IHsgR3JvdXBUYWJsZSB9IGZyb20gXCIuL2dyb3VwXCI7XG5pbXBvcnQgeyB0d2lzdGVyIH0gZnJvbSBcIi4vdHdpc3RlclwiO1xuaW1wb3J0IHsgY3ViZWxldF9mYWNlX2F0dHJzLCBjdWJlbGV0X2xhbWJlcnMsIGN1YmVsZXRfc3RpY2tlciwgY3ViZV9jb25maWcgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRmFjZSB9IGZyb20gXCIuL3V0aWxzX2ludGVybmFsXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJlIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmN1YmVsZXRzID0gW107XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IG5ldyBDdWJlbGV0KGkpO1xuICAgICAgICAgICAgdGhpcy5jdWJlbGV0cy5wdXNoKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZWxldCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NrcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2Nrcy5zZXQoXCJ4XCIsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMubG9ja3Muc2V0KFwieVwiLCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLmxvY2tzLnNldChcInpcIiwgbmV3IFNldCgpKTtcbiAgICAgICAgdGhpcy5sb2Nrcy5zZXQoXCJhXCIsIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMudGFibGUgPSBuZXcgR3JvdXBUYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgZm9yIChjb25zdCBsb2NrIG9mIHRoaXMubG9ja3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChsb2NrLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9jayhheGlzLCBsYXllcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICgoX2EgPSB0aGlzLmxvY2tzLmdldChcImFcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMoMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBheGlzX2xvY2tzZXQgPSB0aGlzLmxvY2tzLmdldChheGlzKTtcbiAgICAgICAgaWYgKGF4aXNfbG9ja3NldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsb2Nrc2V0IG9mIHRoaXMubG9ja3MudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChsb2Nrc2V0ICE9IGF4aXNfbG9ja3NldCAmJiBsb2Nrc2V0LnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF4aXNfbG9ja3NldC5hZGQobGF5ZXIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdW5sb2NrKGF4aXMsIGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGF4aXNfbG9ja3NldCA9IHRoaXMubG9ja3MuZ2V0KGF4aXMpO1xuICAgICAgICBheGlzX2xvY2tzZXQgPT09IG51bGwgfHwgYXhpc19sb2Nrc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBheGlzX2xvY2tzZXQuZGVsZXRlKGxheWVyKTtcbiAgICB9XG4gICAgcmFuZG9tMygpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpLCAwKSwgMik7XG4gICAgfVxuICAgIHNjcmFtYmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1YmVfY29uZmlnLnNjcmFtYmxlX3N0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBbXCJ4XCIsIFwieVwiLCBcInpcIl1bdGhpcy5yYW5kb20zKCldO1xuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLnJhbmRvbTMoKTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKHRoaXMucmFuZG9tMygpIC0gMSkgKiAoTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgdGhpcy50YWJsZS5ncm91cHNbYXhpc11bbGV2ZWxdLnR3aXN0KGFuZ2xlID09PSAwID8gTWF0aC5QSSA6IGFuZ2xlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdHdpc3Rlci5maW5pc2goKTtcbiAgICAgICAgZm9yIChjb25zdCBjdWJlbGV0IG9mIHRoaXMuY3ViZWxldHMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3ViZWxldHMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSBuZXcgQ3ViZWxldChpKTtcbiAgICAgICAgICAgIHRoaXMuY3ViZWxldHMucHVzaChjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmVsZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFibGUgPSBuZXcgR3JvdXBUYWJsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IHgsIHksIHo7XG4gICAgICAgIHR3aXN0ZXIuZmluaXNoKCk7XG4gICAgICAgIHkgPSAyO1xuICAgICAgICBmb3IgKHogPSAwOyB6IDwgMzsgeisrKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuVSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggPSAyO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh6ID0gMjsgeiA+PSAwOyB6LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5SKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDI7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmN1YmVsZXRzW2luZGV4XS5nZXRDb2xvck9mKEZhY2UuRik7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHkgPSAwO1xuICAgICAgICBmb3IgKHogPSAyOyB6ID49IDA7IHotLSkge1xuICAgICAgICAgICAgZm9yICh4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLkQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4ID0gMDtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeiA9IDA7IHogPCAzOyB6KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY3ViZWxldHNbaW5kZXhdLmdldENvbG9yT2YoRmFjZS5MKTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeiA9IDA7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAyOyB4ID49IDA7IHgtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jdWJlbGV0c1tpbmRleF0uZ2V0Q29sb3JPZihGYWNlLkIpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXN0b3JlKHN0YXRlKSB7XG4gICAgICAgIGxldCB4LCB5LCB6O1xuICAgICAgICBsZXQgY3VyID0gMDtcbiAgICAgICAgbGV0IGZhY2U7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgeSA9IDI7XG4gICAgICAgIGZhY2UgPSBGYWNlLlU7XG4gICAgICAgIGZvciAoeiA9IDA7IHogPCAzOyB6KyspIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeCA9IDI7XG4gICAgICAgIGZhY2UgPSBGYWNlLlI7XG4gICAgICAgIGZvciAoeSA9IDI7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgICAgICBmb3IgKHogPSAyOyB6ID49IDA7IHotLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB6ID0gMjtcbiAgICAgICAgZmFjZSA9IEZhY2UuRjtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDA7IHggPCAzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHogKiAzICogMyArIHkgKiAzICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHN0YXRlW2N1cisrXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0c1tpbmRleF07XG4gICAgICAgICAgICAgICAgY3ViZWxldC5yZW1vdmUoY3ViZWxldC5zdGlja2Vyc1tmYWNlXSk7XG4gICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IG5ldyBNZXNoKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yICE9IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2VfYXR0ciA9IGN1YmVsZXRfZmFjZV9hdHRyc1tmYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2tlciA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfc3RpY2tlciwgY3ViZWxldF9sYW1iZXJzW2NvbG9yXSk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucm90YXRpb24uc2V0RnJvbVZlY3RvcjMoZmFjZV9hdHRyLnJvdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5wb3NpdGlvbi5jb3B5KGZhY2VfYXR0ci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LmFkZChzdGlja2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeSA9IDA7XG4gICAgICAgIGZhY2UgPSBGYWNlLkQ7XG4gICAgICAgIGZvciAoeiA9IDI7IHogPj0gMDsgei0tKSB7XG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHggPSAwO1xuICAgICAgICBmYWNlID0gRmFjZS5MO1xuICAgICAgICBmb3IgKHkgPSAyOyB5ID49IDA7IHktLSkge1xuICAgICAgICAgICAgZm9yICh6ID0gMDsgeiA8IDM7IHorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0geiAqIDMgKiAzICsgeSAqIDMgKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3RhdGVbY3VyKytdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmVsZXQgPSB0aGlzLmN1YmVsZXRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnJlbW92ZShjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdKTtcbiAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gbmV3IE1lc2goKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IgIT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ZhY2VdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBjdWJlbGV0X2xhbWJlcnNbY29sb3JdKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnBvc2l0aW9uLmNvcHkoZmFjZV9hdHRyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5zdGlja2Vyc1tmYWNlXSA9IHN0aWNrZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1YmVsZXQuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB6ID0gMDtcbiAgICAgICAgZmFjZSA9IEZhY2UuQjtcbiAgICAgICAgZm9yICh5ID0gMjsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgICAgIGZvciAoeCA9IDI7IHggPj0gMDsgeC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB6ICogMyAqIDMgKyB5ICogMyArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzdGF0ZVtjdXIrK107XG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZWxldHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQucmVtb3ZlKGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0pO1xuICAgICAgICAgICAgICAgIGN1YmVsZXQuc3RpY2tlcnNbZmFjZV0gPSBuZXcgTWVzaCgpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xvciAhPSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWNlX2F0dHIgPSBjdWJlbGV0X2ZhY2VfYXR0cnNbZmFjZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBuZXcgVEhSRUUuTWVzaChjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfbGFtYmVyc1tjb2xvcl0pO1xuICAgICAgICAgICAgICAgICAgICBzdGlja2VyLnJvdGF0aW9uLnNldEZyb21WZWN0b3IzKGZhY2VfYXR0ci5yb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdWJlbGV0LnN0aWNrZXJzW2ZhY2VdID0gc3RpY2tlcjtcbiAgICAgICAgICAgICAgICAgICAgY3ViZWxldC5hZGQoc3RpY2tlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGN1YmVsZXRfZGVmcywgY3ViZWxldF9jb3JlLCBjdWJlbGV0X2ZyYW1lLCBjdWJlbGV0X3N0aWNrZXIsIGN1YmVsZXRfZmFjZV9hdHRycywgZGlyZWN0aW9uVG9JbmRleCwgZmFjZVBvc3Rpb25CaW5kaW5ncywgY3ViZWxldF9sYW1iZXJzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgaW5kZXhUb0RpcmVjdGlvbiB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJlbGV0IGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3ZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgY29uc3QgZHJjdG4gPSBpbmRleFRvRGlyZWN0aW9uKGluZGV4KTtcbiAgICAgICAgdGhpcy52ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhkcmN0bi54LCBkcmN0bi55LCBkcmN0bi56KTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVsZXRfZnJhbWUsIGN1YmVsZXRfY29yZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZnJhbWUpO1xuICAgICAgICB0aGlzLnN0aWNrZXJzID0gbmV3IEFycmF5KDYpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmFjZV9hdHRyID0gY3ViZWxldF9mYWNlX2F0dHJzW2ldO1xuICAgICAgICAgICAgaWYgKGZhY2VfYXR0ci5tYXRjaCh0aGlzLnZlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gbmV3IFRIUkVFLk1lc2goY3ViZWxldF9zdGlja2VyLCBmYWNlX2F0dHIubGFtYmVydCk7XG4gICAgICAgICAgICAgICAgc3RpY2tlci5yb3RhdGlvbi5zZXRGcm9tVmVjdG9yMyhmYWNlX2F0dHIucm90YXRpb24pO1xuICAgICAgICAgICAgICAgIHN0aWNrZXIucG9zaXRpb24uY29weShmYWNlX2F0dHIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RpY2tlcnNbaV0gPSBzdGlja2VyO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHN0aWNrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgIH1cbiAgICBzZXQgdmVjdG9yKHZlY3Rvcikge1xuICAgICAgICB0aGlzLl92ZWN0b3IuY29weSh2ZWN0b3IpO1xuICAgICAgICB0aGlzLmluZGV4ID0gZGlyZWN0aW9uVG9JbmRleCh2ZWN0b3IpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkodmVjdG9yKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5tdWx0aXBseVNjYWxhcihjdWJlbGV0X2RlZnMuc2l6ZSk7XG4gICAgfVxuICAgIGdldCB2ZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3I7XG4gICAgfVxuICAgIGNvbnZlcnRGYWNlKGZhY2UpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgY29uc3QgcXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCkuY29weSh0aGlzLnF1YXRlcm5pb24pO1xuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmcgb2YgZmFjZVBvc3Rpb25CaW5kaW5ncykge1xuICAgICAgICAgICAgaWYgKGJpbmRpbmcuZmFjZSA9PT0gZmFjZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvcHkoYmluZGluZy5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24uYXBwbHlRdWF0ZXJuaW9uKHF1YXRlcm5pb24uaW52ZXJ0KCkpO1xuICAgICAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yMyhNYXRoLnJvdW5kKHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKHBvc2l0aW9uLnkpLCBNYXRoLnJvdW5kKHBvc2l0aW9uLnopKTtcbiAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mIGZhY2VQb3N0aW9uQmluZGluZ3MpIHtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLnBvc2l0aW9uLmVxdWFscyh2ZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuZmFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGdldENvbG9yT2YoZmFjZSkge1xuICAgICAgICBjb25zdCBzdGlja2VyID0gdGhpcy5zdGlja2Vyc1t0aGlzLmNvbnZlcnRGYWNlKGZhY2UpXTtcbiAgICAgICAgc3dpdGNoIChzdGlja2VyLm1hdGVyaWFsKSB7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5MOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLlI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUlwiO1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuRjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJGXCI7XG4gICAgICAgICAgICBjYXNlIGN1YmVsZXRfbGFtYmVycy5COlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJcIjtcbiAgICAgICAgICAgIGNhc2UgY3ViZWxldF9sYW1iZXJzLlU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVVwiO1xuICAgICAgICAgICAgY2FzZSBjdWJlbGV0X2xhbWJlcnMuRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJEXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiP1wiO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgVHdpc3QsIHR3aXN0ZXIgfSBmcm9tIFwiLi90d2lzdGVyXCI7XG5pbXBvcnQgeyBheGlzX3ZlY3RvcnMsIGN1YmVfY29uZmlnLCBpbmRleFRvTGF5ZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZUdyb3VwIGV4dGVuZHMgVEhSRUUuR3JvdXAge1xuICAgIGNvbnN0cnVjdG9yKGN1YmUsIGF4aXMsIGxheWVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHdpc3RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2FuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5ob2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3ViZSA9IGN1YmU7XG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICAgICAgdGhpcy5jdWJlbGV0cyA9IFtdO1xuICAgICAgICB0aGlzLmluZGljZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbGF5ZXIgPSBpbmRleFRvTGF5ZXIoaSk7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PSBcInhcIiAmJiBpbGF5ZXIueCA9PSBsYXllclxuICAgICAgICAgICAgICAgIHx8IGF4aXMgPT0gXCJ5XCIgJiYgaWxheWVyLnkgPT0gbGF5ZXJcbiAgICAgICAgICAgICAgICB8fCBheGlzID09IFwielwiICYmIGlsYXllci56ID09IGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlTWF0cml4KCk7XG4gICAgfVxuICAgIHNldCBhbmdsZShhbmdsZSkge1xuICAgICAgICB0aGlzLl9hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB0aGlzLnNldFJvdGF0aW9uRnJvbUF4aXNBbmdsZShheGlzX3ZlY3RvcnNbdGhpcy5heGlzXSwgYW5nbGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1hdHJpeCgpO1xuICAgICAgICB0aGlzLmN1YmUuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgYW5nbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmdsZTtcbiAgICB9XG4gICAgY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy50d2lzdGluZykge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnR3aXN0aW5nLmFycml2YWw7XG4gICAgICAgICAgICB0d2lzdGVyLmNhbmNlbCh0aGlzLnR3aXN0aW5nKTtcbiAgICAgICAgICAgIHRoaXMudHdpc3RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChhbmdsZSAvIChNYXRoLlBJIC8gMikpICogKE1hdGguUEkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZmluaXNoKCkge1xuICAgICAgICBpZiAodGhpcy50d2lzdGluZykge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnR3aXN0aW5nLmFycml2YWwgLSB0aGlzLmFuZ2xlO1xuICAgICAgICAgICAgdHdpc3Rlci5maW5pc2godGhpcy50d2lzdGluZyk7XG4gICAgICAgICAgICB0aGlzLnR3aXN0aW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIGFuZ2xlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBob2xkKCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5jdWJlLmxvY2sodGhpcy5heGlzLCB0aGlzLmxheWVyKTtcbiAgICAgICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIHRoaXMuaW5kaWNlcykge1xuICAgICAgICAgICAgY29uc3QgY3ViZWxldCA9IHRoaXMuY3ViZS5jdWJlbGV0c1tpXTtcbiAgICAgICAgICAgIHRoaXMuY3ViZWxldHMucHVzaChjdWJlbGV0KTtcbiAgICAgICAgICAgIHRoaXMuY3ViZS5yZW1vdmUoY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLmFkZChjdWJlbGV0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1YmUuYWRkKHRoaXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZHJhZygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuaG9sZGluZykge1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IC10aGlzLmZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhvbGQoKTtcbiAgICB9XG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5ob2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHdpc3RpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjdWJlbGV0ID0gdGhpcy5jdWJlbGV0cy5wb3AoKTtcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IGN1YmVsZXQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm90YXRlKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoY3ViZWxldCk7XG4gICAgICAgICAgICB0aGlzLmN1YmUuYWRkKGN1YmVsZXQpO1xuICAgICAgICAgICAgdGhpcy5jdWJlLmN1YmVsZXRzW2N1YmVsZXQuaW5kZXhdID0gY3ViZWxldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1YmUucmVtb3ZlKHRoaXMpO1xuICAgICAgICB0aGlzLmN1YmUuZGlydHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgdGhpcy5jdWJlLnVubG9jayh0aGlzLmF4aXMsIHRoaXMubGF5ZXIpO1xuICAgICAgICB0aGlzLmN1YmUuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdHdpc3QoYW5nbGUsIGZhc3QpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9sZGluZykge1xuICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSArIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5ob2xkKCk7XG4gICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBhbmdsZSA9IE1hdGgucm91bmQoYW5nbGUgLyAoTWF0aC5QSSAvIDIpKSAqIChNYXRoLlBJIC8gMik7XG4gICAgICAgIGlmIChmYXN0KSB7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuYW5nbGUgLSBhbmdsZSkgPCAxZS02KSB7XG4gICAgICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWMgPSBNYXRoLmFicyh0aGlzLmFuZ2xlIC0gYW5nbGUpIC8gKE1hdGguUEkgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gY3ViZV9jb25maWcuZnJhbWVzICogKDIgLSAyIC8gKGZyYWMgKyAxKSk7XG4gICAgICAgICAgICB0aGlzLnR3aXN0aW5nID0gbmV3IFR3aXN0KHRoaXMuYW5nbGUsIGFuZ2xlLCBkdXJhdGlvbiwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmFuZ2xlIC0gYW5nbGUpIDwgMWUtNikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHdpc3Rlci50d2lzdHMucHVzaCh0aGlzLnR3aXN0aW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcm90YXRlKGN1YmVsZXQpIHtcbiAgICAgICAgY3ViZWxldC5yb3RhdGVPbldvcmxkQXhpcyhheGlzX3ZlY3RvcnNbdGhpcy5heGlzXSwgdGhpcy5hbmdsZSk7XG4gICAgICAgIGN1YmVsZXQudmVjdG9yID0gY3ViZWxldC52ZWN0b3IuYXBwbHlBeGlzQW5nbGUoYXhpc192ZWN0b3JzW3RoaXMuYXhpc10sIHRoaXMuYW5nbGUpO1xuICAgICAgICBjdWJlbGV0LnVwZGF0ZU1hdHJpeCgpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBHcm91cFRhYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjdWJlKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgYXhpcyBvZiBbXCJ4XCIsIFwieVwiLCBcInpcIl0pIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG5ldyBDdWJlR3JvdXAoY3ViZSwgYXhpcywgaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ncm91cHNbYXhpc10gPSBsaXN0O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB4LCB5KSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3RvciB7XG4gICAgY29uc3RydWN0b3IoZG9tcywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5kb21zID0gW107XG4gICAgICAgIHRoaXMudG91Y2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG5ldyBJbnRlcmFjdGlvbihcInRvdWNoZW5kXCIsIHRoaXMubGFzdC5jbGllbnRYIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIHRoaXMubGFzdC5jbGllbnRZIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0ID0gZmlyc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub3RpbigpIHx8ICgoX2EgPSB0aGlzLmxhc3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZGVudGlmaWVyKSAhPSBmaXJzdC5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gbmV3IEludGVyYWN0aW9uKGV2ZW50LnR5cGUsIGZpcnN0LmNsaWVudFggLSB0aGlzLmRvbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCwgZmlyc3QuY2xpZW50WSAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhhY3Rpb24pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIgfHwgZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGNhbmNlbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW91c2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub3RpbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBuZXcgSW50ZXJhY3Rpb24oZXZlbnQudHlwZSwgZXZlbnQuY2xpZW50WCAtIHRoaXMuZG9tc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCBldmVudC5jbGllbnRZIC0gdGhpcy5kb21zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGFjdGlvbik7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgZG9tIG9mIGRvbXMpIHtcbiAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbXMucHVzaChkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLnRvdWNoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMudG91Y2gpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIG5vdGluKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGRvbSBvZiB0aGlzLmRvbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZG9tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExCTFNvbHZlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlID0ge307XG4gICAgICAgIHRoaXMubmV4dENvbG9yID0ge307XG4gICAgICAgIHRoaXMubmV4dEZhY2UgPSB7IGw6IFwiZlwiLCBmOiBcInJcIiwgcjogXCJiXCIsIGI6IFwibFwiIH07XG4gICAgICAgIHRoaXMucHJldkZhY2UgPSB7IGw6IFwiYlwiLCBiOiBcInJcIiwgcjogXCJmXCIsIGY6IFwibFwiIH07XG4gICAgfVxuICAgIGdldEN1YmVTdGF0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZSA9IHtcbiAgICAgICAgICAgIGI6IHN0YXRlWzQ5XSxcbiAgICAgICAgICAgIGJsOiBzdGF0ZVs1MF0uY29uY2F0KHN0YXRlWzM5XSksXG4gICAgICAgICAgICBkOiBzdGF0ZVszMV0sXG4gICAgICAgICAgICBkYjogc3RhdGVbMzRdLmNvbmNhdChzdGF0ZVs1Ml0pLFxuICAgICAgICAgICAgZGJsOiBzdGF0ZVszM10uY29uY2F0KHN0YXRlWzUzXSkuY29uY2F0KHN0YXRlWzQyXSksXG4gICAgICAgICAgICBkZjogc3RhdGVbMjhdLmNvbmNhdChzdGF0ZVsyNV0pLFxuICAgICAgICAgICAgZGZyOiBzdGF0ZVsyOV0uY29uY2F0KHN0YXRlWzI2XSkuY29uY2F0KHN0YXRlWzE1XSksXG4gICAgICAgICAgICBkbDogc3RhdGVbMzBdLmNvbmNhdChzdGF0ZVs0M10pLFxuICAgICAgICAgICAgZGxmOiBzdGF0ZVsyN10uY29uY2F0KHN0YXRlWzQ0XSkuY29uY2F0KHN0YXRlWzI0XSksXG4gICAgICAgICAgICBkcjogc3RhdGVbMzJdLmNvbmNhdChzdGF0ZVsxNl0pLFxuICAgICAgICAgICAgZHJiOiBzdGF0ZVszNV0uY29uY2F0KHN0YXRlWzE3XSkuY29uY2F0KHN0YXRlWzUxXSksXG4gICAgICAgICAgICBmOiBzdGF0ZVsyMl0sXG4gICAgICAgICAgICBmcjogc3RhdGVbMjNdLmNvbmNhdChzdGF0ZVsxMl0pLFxuICAgICAgICAgICAgbDogc3RhdGVbNDBdLFxuICAgICAgICAgICAgbGY6IHN0YXRlWzQxXS5jb25jYXQoc3RhdGVbMjFdKSxcbiAgICAgICAgICAgIHI6IHN0YXRlWzEzXSxcbiAgICAgICAgICAgIHJiOiBzdGF0ZVsxNF0uY29uY2F0KHN0YXRlWzQ4XSksXG4gICAgICAgICAgICB1OiBzdGF0ZVs0XSxcbiAgICAgICAgICAgIHViOiBzdGF0ZVsxXS5jb25jYXQoc3RhdGVbNDZdKSxcbiAgICAgICAgICAgIHVibDogc3RhdGVbMF0uY29uY2F0KHN0YXRlWzQ3XSkuY29uY2F0KHN0YXRlWzM2XSksXG4gICAgICAgICAgICB1Zjogc3RhdGVbN10uY29uY2F0KHN0YXRlWzE5XSksXG4gICAgICAgICAgICB1ZnI6IHN0YXRlWzhdLmNvbmNhdChzdGF0ZVsyMF0pLmNvbmNhdChzdGF0ZVs5XSksXG4gICAgICAgICAgICB1bDogc3RhdGVbM10uY29uY2F0KHN0YXRlWzM3XSksXG4gICAgICAgICAgICB1bGY6IHN0YXRlWzZdLmNvbmNhdChzdGF0ZVszOF0pLmNvbmNhdChzdGF0ZVsxOF0pLFxuICAgICAgICAgICAgdXI6IHN0YXRlWzVdLmNvbmNhdChzdGF0ZVsxMF0pLFxuICAgICAgICAgICAgdXJiOiBzdGF0ZVsyXS5jb25jYXQoc3RhdGVbMTFdKS5jb25jYXQoc3RhdGVbNDVdKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29sb3JfbCA9IHRoaXMuY3ViZVN0YXRlW1wibFwiXTtcbiAgICAgICAgY29uc3QgY29sb3JfciA9IHRoaXMuY3ViZVN0YXRlW1wiclwiXTtcbiAgICAgICAgY29uc3QgY29sb3JfZiA9IHRoaXMuY3ViZVN0YXRlW1wiZlwiXTtcbiAgICAgICAgY29uc3QgY29sb3JfYiA9IHRoaXMuY3ViZVN0YXRlW1wiYlwiXTtcbiAgICAgICAgdGhpcy5uZXh0Q29sb3JbY29sb3JfbF0gPSBjb2xvcl9mO1xuICAgICAgICB0aGlzLm5leHRDb2xvcltjb2xvcl9mXSA9IGNvbG9yX3I7XG4gICAgICAgIHRoaXMubmV4dENvbG9yW2NvbG9yX3JdID0gY29sb3JfYjtcbiAgICAgICAgdGhpcy5uZXh0Q29sb3JbY29sb3JfYl0gPSBjb2xvcl9sO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1YmVTdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV4dENvbG9yKTtcbiAgICB9XG4gICAgVHdpc3RfQigpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY3ViZVN0YXRlLnViO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51YiA9IHRoaXMuY3ViZVN0YXRlLnJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5yYiA9IHRoaXMuY3ViZVN0YXRlLmRiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kYiA9IHRoaXMuY3ViZVN0YXRlLmJsWzFdICsgdGhpcy5jdWJlU3RhdGUuYmxbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmJsID0gdG1wWzFdICsgdG1wWzBdO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51Ymw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVibCA9IHRoaXMuY3ViZVN0YXRlLnVyYlsxXSArIHRoaXMuY3ViZVN0YXRlLnVyYlsyXSArIHRoaXMuY3ViZVN0YXRlLnVyYlswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudXJiID0gdGhpcy5jdWJlU3RhdGUuZHJiWzFdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzBdICsgdGhpcy5jdWJlU3RhdGUuZHJiWzJdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kcmIgPSB0aGlzLmN1YmVTdGF0ZS5kYmxbMl0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kYmxbMV07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRibCA9IHRtcFsyXSArIHRtcFsxXSArIHRtcFswXTtcbiAgICB9XG4gICAgVHdpc3RfUigpIHtcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ciA9IHRoaXMuY3ViZVN0YXRlLmZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5mciA9IHRoaXMuY3ViZVN0YXRlLmRyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kciA9IHRoaXMuY3ViZVN0YXRlLnJiWzFdICsgdGhpcy5jdWJlU3RhdGUucmJbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnJiID0gdG1wWzFdICsgdG1wWzBdO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51cmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyYiA9IHRoaXMuY3ViZVN0YXRlLnVmclsxXSArIHRoaXMuY3ViZVN0YXRlLnVmclsyXSArIHRoaXMuY3ViZVN0YXRlLnVmclswXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWZyID0gdGhpcy5jdWJlU3RhdGUuZGZyWzFdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzBdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzJdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZnIgPSB0aGlzLmN1YmVTdGF0ZS5kcmJbMl0gKyB0aGlzLmN1YmVTdGF0ZS5kcmJbMF0gKyB0aGlzLmN1YmVTdGF0ZS5kcmJbMV07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRyYiA9IHRtcFsyXSArIHRtcFsxXSArIHRtcFswXTtcbiAgICB9XG4gICAgO1xuICAgIFR3aXN0X0YoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51ZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWYgPSB0aGlzLmN1YmVTdGF0ZS5sZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUubGYgPSB0aGlzLmN1YmVTdGF0ZS5kZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGYgPSB0aGlzLmN1YmVTdGF0ZS5mclsxXSArIHRoaXMuY3ViZVN0YXRlLmZyWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5mciA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudWZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ZnIgPSB0aGlzLmN1YmVTdGF0ZS51bGZbMV0gKyB0aGlzLmN1YmVTdGF0ZS51bGZbMl0gKyB0aGlzLmN1YmVTdGF0ZS51bGZbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVsZiA9IHRoaXMuY3ViZVN0YXRlLmRsZlsxXSArIHRoaXMuY3ViZVN0YXRlLmRsZlswXSArIHRoaXMuY3ViZVN0YXRlLmRsZlsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGxmID0gdGhpcy5jdWJlU3RhdGUuZGZyWzJdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzBdICsgdGhpcy5jdWJlU3RhdGUuZGZyWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kZnIgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIFR3aXN0X0woKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51bDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWwgPSB0aGlzLmN1YmVTdGF0ZS5ibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYmwgPSB0aGlzLmN1YmVTdGF0ZS5kbDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGwgPSB0aGlzLmN1YmVTdGF0ZS5sZlsxXSArIHRoaXMuY3ViZVN0YXRlLmxmWzBdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5sZiA9IHRtcFsxXSArIHRtcFswXTtcbiAgICAgICAgdG1wID0gdGhpcy5jdWJlU3RhdGUudWxmO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51bGYgPSB0aGlzLmN1YmVTdGF0ZS51YmxbMV0gKyB0aGlzLmN1YmVTdGF0ZS51YmxbMl0gKyB0aGlzLmN1YmVTdGF0ZS51YmxbMF07XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVibCA9IHRoaXMuY3ViZVN0YXRlLmRibFsxXSArIHRoaXMuY3ViZVN0YXRlLmRibFswXSArIHRoaXMuY3ViZVN0YXRlLmRibFsyXTtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGJsID0gdGhpcy5jdWJlU3RhdGUuZGxmWzJdICsgdGhpcy5jdWJlU3RhdGUuZGxmWzBdICsgdGhpcy5jdWJlU3RhdGUuZGxmWzFdO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kbGYgPSB0bXBbMl0gKyB0bXBbMV0gKyB0bXBbMF07XG4gICAgfVxuICAgIFR3aXN0X1UoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS51bDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWwgPSB0aGlzLmN1YmVTdGF0ZS51ZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWYgPSB0aGlzLmN1YmVTdGF0ZS51cjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudXIgPSB0aGlzLmN1YmVTdGF0ZS51YjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWIgPSB0bXA7XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLnVsZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWxmID0gdGhpcy5jdWJlU3RhdGUudWZyO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS51ZnIgPSB0aGlzLmN1YmVTdGF0ZS51cmI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLnVyYiA9IHRoaXMuY3ViZVN0YXRlLnVibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUudWJsID0gdG1wO1xuICAgIH1cbiAgICBUd2lzdF9EKCkge1xuICAgICAgICBsZXQgdG1wID0gdGhpcy5jdWJlU3RhdGUuZGw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsID0gdGhpcy5jdWJlU3RhdGUuZGI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRiID0gdGhpcy5jdWJlU3RhdGUuZHI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRyID0gdGhpcy5jdWJlU3RhdGUuZGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRmID0gdG1wO1xuICAgICAgICB0bXAgPSB0aGlzLmN1YmVTdGF0ZS5kbGY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRsZiA9IHRoaXMuY3ViZVN0YXRlLmRibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZGJsID0gdGhpcy5jdWJlU3RhdGUuZHJiO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5kcmIgPSB0aGlzLmN1YmVTdGF0ZS5kZnI7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmRmciA9IHRtcDtcbiAgICB9XG4gICAgVHdpc3RfWSgpIHtcbiAgICAgICAgdGhpcy5Ud2lzdF9VKCk7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmN1YmVTdGF0ZS5sZjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUubGYgPSB0aGlzLmN1YmVTdGF0ZS5mcjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuZnIgPSB0aGlzLmN1YmVTdGF0ZS5yYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUucmIgPSB0aGlzLmN1YmVTdGF0ZS5ibDtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYmwgPSB0bXA7XG4gICAgICAgIHRtcCA9IHRoaXMuY3ViZVN0YXRlLmY7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmYgPSB0aGlzLmN1YmVTdGF0ZS5yO1xuICAgICAgICB0aGlzLmN1YmVTdGF0ZS5yID0gdGhpcy5jdWJlU3RhdGUuYjtcbiAgICAgICAgdGhpcy5jdWJlU3RhdGUuYiA9IHRoaXMuY3ViZVN0YXRlLmw7XG4gICAgICAgIHRoaXMuY3ViZVN0YXRlLmwgPSB0bXA7XG4gICAgICAgIHRoaXMuVHdpc3RfRCgpLCB0aGlzLlR3aXN0X0QoKSwgdGhpcy5Ud2lzdF9EKCk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG9yZGVyX2xpc3QpIHtcbiAgICAgICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlcl9saXN0KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9EKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9EKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJVXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9VKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfVSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0woKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9MKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfTCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0woKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkZcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9GKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfRigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0YoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9GKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJSXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfUigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiclwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9SKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfUigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiQlwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9CKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfQigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X0IoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIllcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9ZKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVHdpc3RfWSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlR3aXN0X1koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ud2lzdF9ZKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEJsb2NrUG9zKGJsb2NrKSB7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoXCJeW1wiICsgYmxvY2sgKyBcIl17XCIgKyBibG9jay5sZW5ndGggKyBcIn0kXCIpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLmN1YmVTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3ViZVN0YXRlW2tdLm1hdGNoKHJlZykpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJrXCJdID0gaztcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJ2XCJdID0gdGhpcy5jdWJlU3RhdGVba107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBGSVJTVF9MQVlFUl9FREdFU19TSU5HTEUoYmxvY2tfcG9zLCBibG9ja19jb2xvcikge1xuICAgICAgICBsZXQgZXhwID0gXCJcIiwgZXhwX2xvZyA9IFwiXCI7XG4gICAgICAgIGxldCBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgcyA9IHRoaXMuZ2V0QmxvY2tQb3MoYmxvY2tfY29sb3IpO1xuICAgICAgICAgICAgaWYgKHMuay5pbmRleE9mKFwiZFwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMuayA9PSBibG9ja19wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwX2xvZztcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHMuay5pbmRleE9mKFwidVwiKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChzLmtbMV0gPT0gYmxvY2tfcG9zWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKSArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF0gKyB0aGlzLm5leHRGYWNlW3Mua1sxXV1dICE9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1YmVTdGF0ZVtibG9ja19wb3NbMF1dICsgdGhpcy5jdWJlU3RhdGVbdGhpcy5uZXh0RmFjZVtzLmtbMV1dXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dICsgcy5rWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dICsgcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyB0aGlzLm5leHRGYWNlW3Mua1sxXV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLnZbMF0gPT0gYmxvY2tfY29sb3JbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMua1sxXSA9PSBibG9ja19wb3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXSArIHMua1sxXV0gIT0gdGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdXSArIHRoaXMuY3ViZVN0YXRlW3Mua1sxXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1sxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmtbMF0gPT0gYmxvY2tfcG9zWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlW2Jsb2NrX3Bvc1swXSArIHMua1swXV0gIT0gdGhpcy5jdWJlU3RhdGVbYmxvY2tfcG9zWzBdXSArIHRoaXMuY3ViZVN0YXRlW3Mua1swXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMF07XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IHMua1swXSArIFwiVVwiICsgcy5rWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBMYXllciBDcm9zcyBTaW5nbGUgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiRmlyc3QgTGF5ZXIgQ3Jvc3MgU2luZ2xlIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIEZJUlNUX0xBWUVSX0NPUk5FUlNfU0lOR0xFKGJsb2NrX3BvcywgYmxvY2tfY29sb3IpIHtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiLCBzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSB0aGlzLmdldEJsb2NrUG9zKGJsb2NrX2NvbG9yKTtcbiAgICAgICAgICAgIGlmIChzLmsuaW5kZXhPZihcImRcIikgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IHRoaXMuY3ViZVN0YXRlW1wiZFwiXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5rID09IGJsb2NrX3BvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBfbG9nO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0gKyBcIlVcIiArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbXCJkXCJdKVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMV0gKyBcInVcIiArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzJdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1syXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzLmsgPT0gXCJ1XCIgKyBibG9ja19wb3NbMV0gKyBibG9ja19wb3NbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHMudlswXSA9PSB0aGlzLmN1YmVTdGF0ZVtcImRcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBzLmtbMl0udG9VcHBlckNhc2UoKSArIFwidVwiICsgcy5rWzJdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbXCJkXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzFdICsgXCJ1XCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwID0gcy5rWzJdLnRvVXBwZXJDYXNlKCkgKyBcIlVcIiArIHMua1syXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4cF9sb2cgKz0gZXhwO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgTGF5ZXIgQ29ybmVycyBTaW5nbGUgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiRmlyc3QgTGF5ZXIgQ29ybmVycyBTaW5nbGUgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgO1xuICAgIFNFQ09ORF9MQVlFUl9TSU5HTEUoYmxvY2tfcG9zLCBibG9ja19jb2xvcikge1xuICAgICAgICBsZXQgZXhwID0gXCJcIiwgZXhwX2xvZyA9IFwiXCIsIHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gdGhpcy5nZXRCbG9ja1BvcyhibG9ja19jb2xvcik7XG4gICAgICAgICAgICBpZiAocy5rLmluZGV4T2YoXCJ1XCIpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV4dENvbG9yW3MudlswXV0gPT0gcy52WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbcy5rWzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwidVwiICsgdGhpcy5wcmV2RmFjZVtzLmtbMV1dICsgXCJVXCIgKyB0aGlzLnByZXZGYWNlW3Mua1sxXV0udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJVXCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKSArIFwidVwiICsgcy5rWzFdO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnZbMV0gPT0gdGhpcy5jdWJlU3RhdGVbcy5rWzFdXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cCA9IFwiVVwiICsgdGhpcy5uZXh0RmFjZVtzLmtbMV1dLnRvVXBwZXJDYXNlKCkgKyBcInVcIiArIHRoaXMubmV4dEZhY2Vbcy5rWzFdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCJ1XCIgKyBzLmtbMV0gKyBcIlVcIiArIHMua1sxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBleHAgPSBcIlVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocy52WzBdID09IHRoaXMuY3ViZVN0YXRlW3Mua1swXV0gJiYgcy52WzFdID09IHRoaXMuY3ViZVN0YXRlW3Mua1sxXV0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBfbG9nO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZXhwID0gXCJ1XCIgKyBzLmtbMF0gKyBcIlVcIiArIHMua1swXS50b1VwcGVyQ2FzZSgpICsgXCJVXCIgKyBzLmtbMV0udG9VcHBlckNhc2UoKSArIFwidVwiICsgcy5rWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgTGF5ZXIgU2luZ2xlIEVycm9yOiBcIiwgZXhwX2xvZyk7XG4gICAgICAgIHJldHVybiBcIlNlY29uZCBMYXllciBTaW5nbGUgRXJyb3I6IFwiICsgZXhwX2xvZztcbiAgICB9XG4gICAgRklSU1RfTEFZRVJfRURHRVMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBGSVJTVCBMQVlFUiBFREdFUyAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGxldCBvcmRlciA9IFwiXCI7XG4gICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfRURHRVNfU0lOR0xFKFwiZGxcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJsXCJdKTtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5GSVJTVF9MQVlFUl9FREdFU19TSU5HTEUoXCJkZlwiLCB0aGlzLmN1YmVTdGF0ZVtcImRcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcImZcIl0pO1xuICAgICAgICBvcmRlciArPSB0aGlzLkZJUlNUX0xBWUVSX0VER0VTX1NJTkdMRShcImRyXCIsIHRoaXMuY3ViZVN0YXRlW1wiZFwiXSArIHRoaXMuY3ViZVN0YXRlW1wiclwiXSk7XG4gICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfRURHRVNfU0lOR0xFKFwiZGJcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJiXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3Mob3JkZXIpO1xuICAgIH1cbiAgICA7XG4gICAgRklSU1RfTEFZRVJfQ09STkVSUygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIEZJUlNUIExBWUVSIENPUk5FUlMgLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBsZXQgb3JkZXIgPSBcIlwiO1xuICAgICAgICBvcmRlciArPSB0aGlzLkZJUlNUX0xBWUVSX0NPUk5FUlNfU0lOR0xFKFwiZGxmXCIsIHRoaXMuY3ViZVN0YXRlW1wiZFwiXSArIHRoaXMuY3ViZVN0YXRlW1wibFwiXSArIHRoaXMuY3ViZVN0YXRlW1wiZlwiXSk7XG4gICAgICAgIG9yZGVyICs9IHRoaXMuRklSU1RfTEFZRVJfQ09STkVSU19TSU5HTEUoXCJkZnJcIiwgdGhpcy5jdWJlU3RhdGVbXCJkXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJmXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJyXCJdKTtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5GSVJTVF9MQVlFUl9DT1JORVJTX1NJTkdMRShcImRyYlwiLCB0aGlzLmN1YmVTdGF0ZVtcImRcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcInJcIl0gKyB0aGlzLmN1YmVTdGF0ZVtcImJcIl0pO1xuICAgICAgICBvcmRlciArPSB0aGlzLkZJUlNUX0xBWUVSX0NPUk5FUlNfU0lOR0xFKFwiZGJsXCIsIHRoaXMuY3ViZVN0YXRlW1wiZFwiXSArIHRoaXMuY3ViZVN0YXRlW1wiYlwiXSArIHRoaXMuY3ViZVN0YXRlW1wibFwiXSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXByZXNzKG9yZGVyKTtcbiAgICB9XG4gICAgU0VDT05EX0xBWUVSKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgU0VDT05EIExBWUVSIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IG9yZGVyID0gXCJcIjtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5TRUNPTkRfTEFZRVJfU0lOR0xFKFwibGZcIiwgdGhpcy5jdWJlU3RhdGVbXCJsXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJmXCJdKTtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5TRUNPTkRfTEFZRVJfU0lOR0xFKFwiZnJcIiwgdGhpcy5jdWJlU3RhdGVbXCJmXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJyXCJdKTtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5TRUNPTkRfTEFZRVJfU0lOR0xFKFwicmJcIiwgdGhpcy5jdWJlU3RhdGVbXCJyXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJiXCJdKTtcbiAgICAgICAgb3JkZXIgKz0gdGhpcy5TRUNPTkRfTEFZRVJfU0lOR0xFKFwiYmxcIiwgdGhpcy5jdWJlU3RhdGVbXCJiXCJdICsgdGhpcy5jdWJlU3RhdGVbXCJsXCJdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3Mob3JkZXIpO1xuICAgIH1cbiAgICA7XG4gICAgVE9QX0NST1NTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgVE9QIENST1NTIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgbGV0IGV4cCA9IFwiXCIsIGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICBsZXQgdWMgPSB0aGlzLmN1YmVTdGF0ZVtcInVcIl07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdWJlU3RhdGUudWxbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudXJbMF0gPT0gdWNcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1YmVTdGF0ZS51ZlswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51YlswXSA9PSB1YylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVsWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwiRlJVcnVmXCI7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZS51ZlswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51YlswXSA9PSB1YylcbiAgICAgICAgICAgICAgICBleHAgPSBcIlJCVWJ1clwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudXJbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJGUlVydWZcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY3ViZVN0YXRlLnVyWzBdID09IHVjICYmIHRoaXMuY3ViZVN0YXRlLnViWzBdID09IHVjKVxuICAgICAgICAgICAgICAgIGV4cCA9IFwiUkJVYnVyXCI7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmN1YmVTdGF0ZS51YlswXSA9PSB1YyAmJiB0aGlzLmN1YmVTdGF0ZS51bFswXSA9PSB1YylcbiAgICAgICAgICAgICAgICBleHAgPSBcIkJMVWx1YlwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jdWJlU3RhdGUudWxbMF0gPT0gdWMgJiYgdGhpcy5jdWJlU3RhdGUudWZbMF0gPT0gdWMpXG4gICAgICAgICAgICAgICAgZXhwID0gXCJMRlVmdWxcIjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBleHAgPSBcIkZSVXJ1ZlwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJUb3AgQ3Jvc3MgRXJyb3I6IFwiLCBleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIFwiVG9wIENyb3NzIEVycm9yOiBcIiArIGV4cF9sb2c7XG4gICAgfVxuICAgIDtcbiAgICBUSElSRF9MQVlFUl9DT1JORVJTX1BPUygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0gQ09NUExFVEUgVEhFIFRISVJEIExBWUVSIENPUk5FUlMgKFBPU0lUSU9OKSAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBcInJMVWx1UlVMdWxcIiwgYmxvY2tzID0gW1widWxmXCIsIFwidWZyXCIsIFwidXJiXCIsIFwidWJsXCJdLCB1YyA9IHRoaXMuY3ViZVN0YXRlW1widVwiXTtcbiAgICAgICAgbGV0IGV4cF9sb2cgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxhc3QgPSBpO1xuICAgICAgICAgICAgbGV0IHRpbWVzID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGkgKyA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gaiAlIDQ7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RjID0gdGhpcy5jdWJlU3RhdGVbYmxvY2tzW2xhc3RdXS5yZXBsYWNlKHVjLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV4dGMgPSB0aGlzLmN1YmVTdGF0ZVtibG9ja3NbbmV4dF1dLnJlcGxhY2UodWMsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5leHRDb2xvcltsYXN0Y1swXV0gPT0gbGFzdGNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRjLmluZGV4T2YobGFzdGNbMV0pICE9IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBuZXh0Yy5pbmRleE9mKHRoaXMubmV4dENvbG9yW2xhc3RjWzFdXSkgIT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0Yy5pbmRleE9mKGxhc3RjWzBdKSAhPSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgbmV4dGMuaW5kZXhPZih0aGlzLm5leHRDb2xvcltsYXN0Y1swXV0pICE9IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3QgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICBsYXN0ID0gKGxhc3QgLSAxICsgNCkgJSA0O1xuICAgICAgICAgICAgICAgIGlmIChsYXN0ID09IDApXG4gICAgICAgICAgICAgICAgICAgIGV4cF9sb2cgPSBcInVcIiArIHN0ZXAsIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdCA9PSAxKVxuICAgICAgICAgICAgICAgICAgICBleHBfbG9nID0gc3RlcCwgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0ID09IDIpXG4gICAgICAgICAgICAgICAgICAgIGV4cF9sb2cgPSBcIlVcIiArIHN0ZXAsIHRoaXMuY2hhbmdlU3RhdGUoZXhwX2xvZyk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdCA9PSAzKVxuICAgICAgICAgICAgICAgICAgICBleHBfbG9nID0gXCJVVVwiICsgc3RlcCwgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVzID4gMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICAgICAgfVxuICAgICAgICBleHBfbG9nID0gc3RlcCArIFwiVVwiICsgc3RlcDtcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShleHBfbG9nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgfVxuICAgIFRISVJEX0xBWUVSX0NPUk5FUlNfT1JJKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLSBDT01QTEVURSBUSEUgVEhJUkQgTEFZRVIgQ09STkVSUyAoT1JJRU5UKSAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGNvbnN0IHN0ZXAxID0gXCJydVJ1cnV1UnV1XCIsIHN0ZXAyID0gXCJGVWZVRlVVZlVVXCI7XG4gICAgICAgIGNvbnN0IGJsb2NrcyA9IFtcInVsZlwiLCBcInVmclwiLCBcInVyYlwiLCBcInVibFwiXSwgdWMgPSB0aGlzLmN1YmVTdGF0ZVtcInVcIl07XG4gICAgICAgIGxldCBleHBfbG9nID0gXCJcIiwgcyA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgYmxvY2tzKVxuICAgICAgICAgICAgcyArPSB0aGlzLmN1YmVTdGF0ZVtibG9ja10uaW5kZXhPZih1Yyk7XG4gICAgICAgIGlmIChzLm1hdGNoKC8yMjIwfDAyMjJ8MjAyMnwyMjAyLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMDIyMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMjAyMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjIyMDJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwidVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8xMTEwfDAxMTF8MTAxMXwxMTAxLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMDExMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMTAxMVwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjExMDFcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwidVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8yMDAxfDEyMDB8MDEyMHwwMDEyLykpIHtcbiAgICAgICAgICAgIGlmIChzID09IFwiMTIwMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMDEyMFwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjAwMTJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwidVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMSArIFwiVVwiICsgc3RlcDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocy5tYXRjaCgvMTAwMnwyMTAwfDAyMTB8MDAyMS8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjIxMDBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAocyA9PSBcIjAyMTBcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIwMDIxXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcInVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDIgKyBcIlVcIiArIHN0ZXAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzIxMjF8MTIxMi8pKSB7XG4gICAgICAgICAgICBpZiAocyA9PSBcIjEyMTJcIilcbiAgICAgICAgICAgICAgICBleHBfbG9nICs9IFwiVVwiO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBzdGVwMiArIFwiVVVcIiArIHN0ZXAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHMubWF0Y2goLzIxMTJ8MjIxMXwxMjIxfDExMjIvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIyMjExXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPT0gXCIxMjIxXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVVXCI7XG4gICAgICAgICAgICBlbHNlIGlmIChzID09IFwiMTEyMlwiKVxuICAgICAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJ1XCI7XG4gICAgICAgICAgICBleHBfbG9nICs9IHN0ZXAxICsgXCJVXCIgKyBzdGVwMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8wMjAxfDEwMjAvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIxMDIwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDEgKyBcIlVVXCIgKyBzdGVwMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzLm1hdGNoKC8wMTAyfDIwMTAvKSkge1xuICAgICAgICAgICAgaWYgKHMgPT0gXCIyMDEwXCIpXG4gICAgICAgICAgICAgICAgZXhwX2xvZyArPSBcIlVcIjtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gc3RlcDIgKyBcIlVVXCIgKyBzdGVwMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cF9sb2cpO1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wcmVzcyhleHBfbG9nKTtcbiAgICB9XG4gICAgVEhJUkRfTEFZRVJfRURHRVMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tIENPTVBMRVRFIFRIRSBUSElSRCBMQVlFUiBFREdFUyAtLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGNvbnN0IHN0ZXAxID0gXCJydVJ1cnV1UnV1XCIsIHN0ZXAyID0gXCJGVWZVRlVVZlVVXCI7XG4gICAgICAgIGxldCBleHBfbG9nID0gXCJcIjtcbiAgICAgICAgd2hpbGUgKHRoaXMuY3ViZVN0YXRlLnVsZlsyXSAhPSB0aGlzLmN1YmVTdGF0ZS5mKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFwiVVwiKTtcbiAgICAgICAgICAgIGV4cF9sb2cgKz0gXCJVXCI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBleHAgPSBcIlwiO1xuICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMuY3ViZVN0YXRlLnVmWzFdICsgdGhpcy5jdWJlU3RhdGUudXJbMV0gKyB0aGlzLmN1YmVTdGF0ZS51YlsxXSArIHRoaXMuY3ViZVN0YXRlLnVsWzFdO1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY3ViZVN0YXRlLmYgKyB0aGlzLmN1YmVTdGF0ZS5yICsgdGhpcy5jdWJlU3RhdGUuYiArIHRoaXMuY3ViZVN0YXRlLmw7XG4gICAgICAgICAgICBsZXQgdGltZXMgPSAwLCBwb3MgPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNbal0gPT0gY1tqXSlcbiAgICAgICAgICAgICAgICAgICAgdGltZXMrKywgcG9zID0gajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lcyA+IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHJlc3MoZXhwX2xvZyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0aW1lcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvcyA9PSAxKVxuICAgICAgICAgICAgICAgICAgICBleHAgKz0gXCJZXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zID09IDIpXG4gICAgICAgICAgICAgICAgICAgIGV4cCArPSBcIllZXCI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocG9zID09IDMpXG4gICAgICAgICAgICAgICAgICAgIGV4cCArPSBcInlcIjtcbiAgICAgICAgICAgICAgICBpZiAoc1socG9zICsgMSkgJSA0XSA9PSB0aGlzLm5leHRDb2xvclt0aGlzLm5leHRDb2xvcltzW3Bvc11dXSlcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IHN0ZXAxICsgc3RlcDI7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBleHAgKz0gXCJ5XCIgKyBzdGVwMiArIHN0ZXAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGV4cCArPSBzdGVwMSArIHN0ZXAyO1xuICAgICAgICAgICAgZXhwX2xvZyArPSBleHA7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKGV4cCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlyZCBMYXllciBFZGdlcyBFcnJvcjogXCIsIGV4cF9sb2cpO1xuICAgICAgICByZXR1cm4gXCJUaGlyZCBMYXllciBFZGdlcyBFcnJvcjogXCIgKyBleHBfbG9nO1xuICAgIH1cbiAgICBzb2x2ZUN1YmUoKSB7XG4gICAgICAgIGxldCBzdGVwcyA9IFtdO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuRklSU1RfTEFZRVJfRURHRVMoKSk7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5GSVJTVF9MQVlFUl9DT1JORVJTKCkpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuU0VDT05EX0xBWUVSKCkpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuVE9QX0NST1NTKCkpO1xuICAgICAgICBzdGVwcy5wdXNoKHRoaXMuVEhJUkRfTEFZRVJfQ09STkVSU19QT1MoKSk7XG4gICAgICAgIHN0ZXBzLnB1c2godGhpcy5USElSRF9MQVlFUl9DT1JORVJTX09SSSgpKTtcbiAgICAgICAgc3RlcHMucHVzaCh0aGlzLlRISVJEX0xBWUVSX0VER0VTKCkpO1xuICAgICAgICByZXR1cm4gc3RlcHM7XG4gICAgfVxuICAgIDtcbiAgICBjb21wcmVzcyhvcmRlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIucmVwbGFjZSgvdVV8VXV8ZER8RGR8bEx8TGx8ZkZ8RmZ8clJ8UnJ8YkJ8QmJ8eVl8WXl8dXV1dXxkZGRkfGxsbGx8ZmZmZnxycnJyfGJiYmJ8eXl5eXxVVVVVfERERER8TExMTHxGRkZGfFJSUlJ8QkJCQnxZWVlZL2csIFwiXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC91dXUvZywgXCJVXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9kZGQvZywgXCJEXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9sbGwvZywgXCJMXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9mZmYvZywgXCJGXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9ycnIvZywgXCJSXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9iYmIvZywgXCJCXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC95eXkvZywgXCJZXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9VVVUvZywgXCJ1XCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9EREQvZywgXCJkXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9MTEwvZywgXCJsXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9GRkYvZywgXCJmXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9SUlIvZywgXCJyXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9CQkIvZywgXCJiXCIpO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlci5yZXBsYWNlKC9ZWVkvZywgXCJ5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmRlcjtcbiAgICB9XG4gICAgc29sdmUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5nZXRDdWJlU3RhdGUoc3RhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zb2x2ZUN1YmUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVHdpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGRlcGF0dXJlLCBhcnJpdmFsLCBkdXJhdGlvbiwgY2FsbGJhY2tfZnVuYykge1xuICAgICAgICB0aGlzLmRlcGFydHVyZSA9IGRlcGF0dXJlO1xuICAgICAgICB0aGlzLmFycml2YWwgPSBhcnJpdmFsO1xuICAgICAgICB0aGlzLmR1cmFudGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICB0aGlzLmNhbGxiYWNrX2Z1bmMgPSBjYWxsYmFja19mdW5jO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgIH1cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYW50aW9uO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmFycml2YWw7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQrKztcbiAgICAgICAgY29uc3QgZnJhYyA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMuZWxhcHNlZCAvIHRoaXMuZHVyYW50aW9uLCAwKSwgMSk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGZyYWMgPT0gMSA/IHRoaXMuYXJyaXZhbCA6ICh0aGlzLmRlcGFydHVyZSArICh0aGlzLmFycml2YWwgLSB0aGlzLmRlcGFydHVyZSkgKiAoMSAtICgxIC0gZnJhYykgKiAoMSAtIGZyYWMpKSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsYmFja19mdW5jKHRoaXMuY3VycmVudCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFR3aXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR3aXN0cyA9IFtdO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgY3VyID0gMDtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMudHdpc3RzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGN1ciA8IGVuZCkge1xuICAgICAgICAgICAgdGhpcy50d2lzdHNbY3VyXS51cGRhdGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnR3aXN0c1tjdXJdLmNhbGxiYWNrKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR3aXN0cy5zcGxpY2UoY3VyLCAxKTtcbiAgICAgICAgICAgICAgICBlbmQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmlzaCh0d2lzdCA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHdpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2lzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50d2lzdHNbaV0gPT0gdHdpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdHdpc3QuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdpc3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdHdpc3RzID0gdGhpcy50d2lzdHMuc3BsaWNlKDApO1xuICAgICAgICAgICAgZm9yIChjb25zdCB0d2lzdCBvZiB0d2lzdHMpIHtcbiAgICAgICAgICAgICAgICB0d2lzdC5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYW5jZWwodHdpc3QpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnR3aXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudHdpc3RzW2ldID09IHR3aXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50d2lzdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlzVHdpc3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR3aXN0cy5sZW5ndGggIT0gMDtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgdHdpc3RlciA9IG5ldyBUd2lzdGVyKCk7XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEZhY2UsIEZyYW1lLCBTdGlja2VyIH0gZnJvbSBcIi4vdXRpbHNfaW50ZXJuYWxcIjtcbmV4cG9ydCBjb25zdCBjdWJlX2NvbmZpZyA9IHtcbiAgICBmcmFtZXM6IDMwLFxuICAgIHNlbnNpYmlsaXR5OiAyNSAqIDFlLTQsXG4gICAgc2NyYW1ibGVfc3RlcHM6IDIwLFxuICAgIHNvbHZlcklkOiAwLFxufTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2NvbG9ycyA9IHtcbiAgICBSOiBcIiNCNzFDMUNcIixcbiAgICBMOiBcIiNGRjZEMDBcIixcbiAgICBVOiBcIiNGMEYwRjBcIixcbiAgICBEOiBcIiNGRkQ2MDBcIixcbiAgICBGOiBcIiMwMEEwMjBcIixcbiAgICBCOiBcIiMwRDQ3QTFcIixcbiAgICBjb3JlOiBcIiMyMDIwMjBcIixcbiAgICBncmF5OiBcIiM4MDgwODBcIixcbiAgICBoaWdoOiBcIiNGRjAwODBcIixcbn07XG5leHBvcnQgY29uc3QgY3ViZWxldF9kZWZzID0ge1xuICAgIHNpemU6IDY0LFxuICAgIF9ib3JkZXJfd2lkdGg6IDMsXG4gICAgX2VkZ2Vfd2lkdGg6IDIsXG4gICAgX3N0aWNrZXJfZGVwdGg6IDAuMSxcbn07XG5leHBvcnQgY29uc3QgY3ViZWxldF9mcmFtZSA9IG5ldyBGcmFtZShjdWJlbGV0X2RlZnMuc2l6ZSwgY3ViZWxldF9kZWZzLl9ib3JkZXJfd2lkdGgpO1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfbGFtYmVycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY3ViZWxldF9jb2xvcnMpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiBjdWJlbGV0X2NvbG9yc1trZXldIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufSkoKTtcbmV4cG9ydCBjb25zdCBjdWJlbGV0X2NvcmUgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xuICAgIGNvbG9yOiBjdWJlbGV0X2NvbG9ycy5jb3JlLFxuICAgIHNwZWN1bGFyOiBjdWJlbGV0X2NvbG9ycy5ncmF5LFxuICAgIHNoaW5pbmVzczogMixcbn0pO1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfc3RpY2tlciA9IG5ldyBTdGlja2VyKGN1YmVsZXRfZGVmcy5zaXplIC0gMiAqIGN1YmVsZXRfZGVmcy5fYm9yZGVyX3dpZHRoIC0gY3ViZWxldF9kZWZzLl9lZGdlX3dpZHRoLCBjdWJlbGV0X2RlZnMuX3N0aWNrZXJfZGVwdGgpO1xuZXhwb3J0IGNvbnN0IGN1YmVsZXRfZmFjZV9hdHRycyA9IFtcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueCA9PSAtMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLkwsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygtY3ViZWxldF9kZWZzLnNpemUgLyAyLCAwLCAwKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKDAsIC1NYXRoLlBJIC8gMiwgMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueCA9PSAxOyB9LFxuICAgICAgICBsYW1iZXJ0OiBjdWJlbGV0X2xhbWJlcnMuUixcbiAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKGN1YmVsZXRfZGVmcy5zaXplIC8gMiwgMCwgMCksXG4gICAgICAgIHJvdGF0aW9uOiBuZXcgVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueSA9PSAtMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLkQsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAtY3ViZWxldF9kZWZzLnNpemUgLyAyLCAwKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKE1hdGguUEkgLyAyLCAwLCAwKSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICh2ZWN0b3IpID0+IHsgcmV0dXJuIHZlY3Rvci55ID09IDE7IH0sXG4gICAgICAgIGxhbWJlcnQ6IGN1YmVsZXRfbGFtYmVycy5VLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgY3ViZWxldF9kZWZzLnNpemUgLyAyLCAwKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKC1NYXRoLlBJIC8gMiwgMCwgMCksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAodmVjdG9yKSA9PiB7IHJldHVybiB2ZWN0b3IueiA9PSAtMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLkIsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtY3ViZWxldF9kZWZzLnNpemUgLyAyKSxcbiAgICAgICAgcm90YXRpb246IG5ldyBWZWN0b3IzKE1hdGguUEksIDAsIDApLFxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogKHZlY3RvcikgPT4geyByZXR1cm4gdmVjdG9yLnogPT0gMTsgfSxcbiAgICAgICAgbGFtYmVydDogY3ViZWxldF9sYW1iZXJzLkYsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCBjdWJlbGV0X2RlZnMuc2l6ZSAvIDIpLFxuICAgICAgICByb3RhdGlvbjogbmV3IFZlY3RvcjMoMiAqIE1hdGguUEksIDAsIDApLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IGN1YmVfc2l6ZSA9IGN1YmVsZXRfZGVmcy5zaXplICogMztcbmV4cG9ydCBjb25zdCBheGlzX3ZlY3RvcnMgPSB7XG4gICAgYTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXG4gICAgeDogbmV3IFRIUkVFLlZlY3RvcjMoLTEsIDAsIDApLFxuICAgIHk6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKSxcbiAgICB6OiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSksXG59O1xuZXhwb3J0IGNvbnN0IGF4aXNfcGxhbmVzID0ge1xuICAgIHg6IG5ldyBUSFJFRS5QbGFuZShuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSwgLWN1YmVfc2l6ZSAvIDIpLFxuICAgIHk6IG5ldyBUSFJFRS5QbGFuZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgLWN1YmVfc2l6ZSAvIDIpLFxuICAgIHo6IG5ldyBUSFJFRS5QbGFuZShuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKSwgLWN1YmVfc2l6ZSAvIDIpXG59O1xuZXhwb3J0IGNvbnN0IGluZGV4VG9EaXJlY3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjMoaW5kZXggJSAzIC0gMSwgTWF0aC5mbG9vcihpbmRleCAvIDMpICUgMyAtIDEsIE1hdGguZmxvb3IoaW5kZXggLyA5KSAtIDEpO1xufTtcbmV4cG9ydCBjb25zdCBkaXJlY3Rpb25Ub0luZGV4ID0gKGRyY3RuKSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKGRyY3RuLnggKyAxKSArIChkcmN0bi55ICsgMSkgKiAzICsgKGRyY3RuLnogKyAxKSAqIDkpO1xufTtcbmV4cG9ydCBjb25zdCBpbmRleFRvTGF5ZXIgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB7IHg6IGluZGV4ICUgMywgeTogTWF0aC5mbG9vcihpbmRleCAvIDMpICUgMywgejogTWF0aC5mbG9vcihpbmRleCAvIDkpIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgY29uc3Qgd29ybGRUb0luZGV4ID0gKHBvaW50KSA9PiB7XG4gICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcjMoKS5jb3B5KHBvaW50KTtcbiAgICB2ZWN0b3IuYWRkKG5ldyBWZWN0b3IzKCkuc2V0U2NhbGFyKGN1YmVfc2l6ZSAvIDIpKTtcbiAgICB2ZWN0b3IuZGl2aWRlU2NhbGFyKGN1YmVfc2l6ZSkubXVsdGlwbHlTY2FsYXIoMykuZmxvb3IoKTtcbiAgICB2ZWN0b3IubWF4KG5ldyBWZWN0b3IzKCkuc2V0U2NhbGFyKDApKTtcbiAgICB2ZWN0b3IubWluKG5ldyBWZWN0b3IzKCkuc2V0U2NhbGFyKDIpKTtcbiAgICByZXR1cm4gdmVjdG9yLnggKyB2ZWN0b3IueSAqIDMgKyB2ZWN0b3IueiAqIDk7XG59O1xuZXhwb3J0IGNvbnN0IGZhY2VQb3N0aW9uQmluZGluZ3MgPSBbXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLkwsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5SLFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZmFjZTogRmFjZS5ELFxuICAgICAgICBwb3NpdGlvbjogbmV3IFRIUkVFLlZlY3RvcjMoMCwgLTEsIDApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuVSxcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGZhY2U6IEZhY2UuQixcbiAgICAgICAgcG9zaXRpb246IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKVxuICAgIH0sXG4gICAge1xuICAgICAgICBmYWNlOiBGYWNlLkYsXG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKVxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHN0cmluZ1RvVHdpc3RQYXJhbXMgPSB7XG4gICAgXCJMXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiTCdcIjogeyBheGlzOiAneCcsIGxheWVyczogWzBdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIkwyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJSXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJSJ1wiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIlIyXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcIkZcIjogeyBheGlzOiAneicsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIkYnXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiRjJcIjogeyBheGlzOiAneicsIGxheWVyczogWzJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiQlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIkInXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJCMlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMF0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiVVwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiVSdcIjogeyBheGlzOiAneScsIGxheWVyczogWzJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJVMlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJEXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiRCdcIjogeyBheGlzOiAneScsIGxheWVyczogWzBdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcIkQyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswXSwgYW5nbGU6IC1NYXRoLlBJIH0sXG4gICAgXCJ+XCI6IHsgYXhpczogJ2EnLCBsYXllcnM6IFtdLCBhbmdsZTogMCB9LFxuICAgIFwieFwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwieCdcIjogeyBheGlzOiAneCcsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJ4MlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJ5XCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJ5J1wiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMSwgMl0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcInkyXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcInpcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcInonXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFswLCAxLCAyXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwiejJcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDEsIDJdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwibFwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcImwnXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJsMlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiclwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwicidcIjogeyBheGlzOiAneCcsIGxheWVyczogWzIsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJyMlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiBNYXRoLlBJIH0sXG4gICAgXCJmXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJmJ1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMiwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcImYyXCI6IHsgYXhpczogJ3onLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IE1hdGguUEkgfSxcbiAgICBcImJcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJiJ1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiYjJcIjogeyBheGlzOiAneicsIGxheWVyczogWzAsIDFdLCBhbmdsZTogLU1hdGguUEkgfSxcbiAgICBcInVcIjogeyBheGlzOiAneScsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSAvIDIgfSxcbiAgICBcInUnXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsyLCAxXSwgYW5nbGU6IC1NYXRoLlBJIC8gMiB9LFxuICAgIFwidTJcIjogeyBheGlzOiAneScsIGxheWVyczogWzIsIDFdLCBhbmdsZTogTWF0aC5QSSB9LFxuICAgIFwiZFwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcImQnXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFswLCAxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJkMlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMCwgMV0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiRVwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIkUnXCI6IHsgYXhpczogJ3knLCBsYXllcnM6IFsxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJFMlwiOiB7IGF4aXM6ICd5JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiTVwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiAtTWF0aC5QSSAvIDIgfSxcbiAgICBcIk0nXCI6IHsgYXhpczogJ3gnLCBsYXllcnM6IFsxXSwgYW5nbGU6IE1hdGguUEkgLyAyIH0sXG4gICAgXCJNMlwiOiB7IGF4aXM6ICd4JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiAtTWF0aC5QSSB9LFxuICAgIFwiU1wiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiBNYXRoLlBJIC8gMiB9LFxuICAgIFwiUydcIjogeyBheGlzOiAneicsIGxheWVyczogWzFdLCBhbmdsZTogLU1hdGguUEkgLyAyIH0sXG4gICAgXCJTMlwiOiB7IGF4aXM6ICd6JywgbGF5ZXJzOiBbMV0sIGFuZ2xlOiBNYXRoLlBJIH0sXG59O1xuZXhwb3J0IGNvbnN0IGxibE9yZGVyTWFwcGluZyA9IHtcbiAgICBcIlVcIjogXCJVXCIsXG4gICAgXCJ1XCI6IFwiVSdcIixcbiAgICBcIkRcIjogXCJEXCIsXG4gICAgXCJkXCI6IFwiRCdcIixcbiAgICBcIkZcIjogXCJGXCIsXG4gICAgXCJmXCI6IFwiRidcIixcbiAgICBcIkxcIjogXCJMXCIsXG4gICAgXCJsXCI6IFwiTCdcIixcbiAgICBcIlJcIjogXCJSXCIsXG4gICAgXCJyXCI6IFwiUidcIixcbiAgICBcIkJcIjogXCJCXCIsXG4gICAgXCJiXCI6IFwiQidcIixcbiAgICBcIllcIjogXCJ5XCIsXG4gICAgXCJ5XCI6IFwieSdcIlxufTtcbmV4cG9ydCBjb25zdCBmYWNlVG9Db2xvciA9IHtcbiAgICBcIlVcIjogXCJ3XCIsXG4gICAgXCJGXCI6IFwiZ1wiLFxuICAgIFwiUlwiOiBcInJcIixcbiAgICBcIkJcIjogXCJiXCIsXG4gICAgXCJEXCI6IFwieVwiLFxuICAgIFwiTFwiOiBcIm9cIlxufTtcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuZXhwb3J0IHZhciBGYWNlO1xuKGZ1bmN0aW9uIChGYWNlKSB7XG4gICAgRmFjZVtGYWNlW1wiTFwiXSA9IDBdID0gXCJMXCI7XG4gICAgRmFjZVtGYWNlW1wiUlwiXSA9IDFdID0gXCJSXCI7XG4gICAgRmFjZVtGYWNlW1wiRFwiXSA9IDJdID0gXCJEXCI7XG4gICAgRmFjZVtGYWNlW1wiVVwiXSA9IDNdID0gXCJVXCI7XG4gICAgRmFjZVtGYWNlW1wiQlwiXSA9IDRdID0gXCJCXCI7XG4gICAgRmFjZVtGYWNlW1wiRlwiXSA9IDVdID0gXCJGXCI7XG59KShGYWNlIHx8IChGYWNlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBGcmFtZSBleHRlbmRzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBib3JkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgbyA9IHNpemUgLyAyO1xuICAgICAgICBjb25zdCBpID0gbyAtIGJvcmRlcjtcbiAgICAgICAgY29uc3QgX3ZlcnRzID0gW1xuICAgICAgICAgICAgLWksICtpLCArbyxcbiAgICAgICAgICAgICtpLCAraSwgK28sXG4gICAgICAgICAgICAraSwgLWksICtvLFxuICAgICAgICAgICAgLWksIC1pLCArbyxcbiAgICAgICAgICAgIC1pLCArbywgLWksXG4gICAgICAgICAgICAraSwgK28sIC1pLFxuICAgICAgICAgICAgK2ksICtvLCAraSxcbiAgICAgICAgICAgIC1pLCArbywgK2ksXG4gICAgICAgICAgICAtbywgLWksIC1pLFxuICAgICAgICAgICAgLW8sICtpLCAtaSxcbiAgICAgICAgICAgIC1vLCAraSwgK2ksXG4gICAgICAgICAgICAtbywgLWksICtpLFxuICAgICAgICAgICAgK2ksICtpLCAtbyxcbiAgICAgICAgICAgIC1pLCAraSwgLW8sXG4gICAgICAgICAgICAtaSwgLWksIC1vLFxuICAgICAgICAgICAgK2ksIC1pLCAtbyxcbiAgICAgICAgICAgIC1pLCAtbywgK2ksXG4gICAgICAgICAgICAraSwgLW8sICtpLFxuICAgICAgICAgICAgK2ksIC1vLCAtaSxcbiAgICAgICAgICAgIC1pLCAtbywgLWksXG4gICAgICAgICAgICArbywgK2ksICtpLFxuICAgICAgICAgICAgK28sICtpLCAtaSxcbiAgICAgICAgICAgICtvLCAtaSwgLWksXG4gICAgICAgICAgICArbywgLWksICtpLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKF92ZXJ0cywgMykpO1xuICAgICAgICB0aGlzLnNldEluZGV4KEZyYW1lLl9pbmRpY2VzKTtcbiAgICAgICAgdGhpcy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIH1cbn1cbkZyYW1lLl9pbmRpY2VzID0gW1xuICAgIDAsIDIsIDEsXG4gICAgMCwgMywgMixcbiAgICA0LCA2LCA1LFxuICAgIDQsIDcsIDYsXG4gICAgOCwgMTAsIDksXG4gICAgOCwgMTEsIDEwLFxuICAgIDEyLCAxNCwgMTMsXG4gICAgMTIsIDE1LCAxNCxcbiAgICAxNiwgMTgsIDE3LFxuICAgIDE2LCAxOSwgMTgsXG4gICAgMjAsIDIyLCAyMSxcbiAgICAyMCwgMjMsIDIyLFxuICAgIDEsIDYsIDcsXG4gICAgMCwgMSwgNyxcbiAgICAzLCAwLCAxMCxcbiAgICAxMSwgMywgMTAsXG4gICAgMTcsIDIsIDMsXG4gICAgMTYsIDE3LCAzLFxuICAgIDIzLCAyMCwgMSxcbiAgICAyLCAyMywgMSxcbiAgICA1LCAxMiwgMTMsXG4gICAgNCwgNSwgMTMsXG4gICAgOSwgMTMsIDE0LFxuICAgIDgsIDksIDE0LFxuICAgIDIyLCAxNSwgMTIsXG4gICAgMjEsIDIyLCAxMixcbiAgICAxOSwgMTQsIDE1LFxuICAgIDE4LCAxOSwgMTUsXG4gICAgNywgNCwgOSxcbiAgICAxMCwgNywgOSxcbiAgICAxMSwgOCwgMTksXG4gICAgMTYsIDExLCAxOSxcbiAgICAyMywgMTcsIDE4LFxuICAgIDIyLCAyMywgMTgsXG4gICAgMjAsIDIxLCA1LFxuICAgIDYsIDIwLCA1LFxuICAgIDIwLCA2LCAxLFxuICAgIDEwLCAwLCA3LFxuICAgIDIxLCAxMiwgNSxcbiAgICAxMywgOSwgNCxcbiAgICAyMywgMiwgMTcsXG4gICAgMTEsIDE2LCAzLFxuICAgIDIyLCAxOCwgMTUsXG4gICAgOCwgMTQsIDE5LFxuXTtcbmV4cG9ydCBjbGFzcyBTdGlja2VyIGV4dGVuZHMgVEhSRUUuRXh0cnVkZUdlb21ldHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBkZXB0aCkge1xuICAgICAgICBzaXplID0gc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IGxlZnQgPSAtc2l6ZTtcbiAgICAgICAgY29uc3QgYm90dG9tID0gc2l6ZTtcbiAgICAgICAgY29uc3QgdG9wID0gLXNpemU7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc2l6ZTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gc2l6ZSAvIDQ7XG4gICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICAgIHNoYXBlLm1vdmVUbyhsZWZ0LCB0b3AgKyByYWRpdXMpO1xuICAgICAgICBzaGFwZS5saW5lVG8obGVmdCwgYm90dG9tIC0gcmFkaXVzKTtcbiAgICAgICAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyhsZWZ0LCBib3R0b20sIGxlZnQgKyByYWRpdXMsIGJvdHRvbSk7XG4gICAgICAgIHNoYXBlLmxpbmVUbyhyaWdodCAtIHJhZGl1cywgYm90dG9tKTtcbiAgICAgICAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyhyaWdodCwgYm90dG9tLCByaWdodCwgYm90dG9tIC0gcmFkaXVzKTtcbiAgICAgICAgc2hhcGUubGluZVRvKHJpZ2h0LCB0b3AgKyByYWRpdXMpO1xuICAgICAgICBzaGFwZS5xdWFkcmF0aWNDdXJ2ZVRvKHJpZ2h0LCB0b3AsIHJpZ2h0IC0gcmFkaXVzLCB0b3ApO1xuICAgICAgICBzaGFwZS5saW5lVG8obGVmdCArIHJhZGl1cywgdG9wKTtcbiAgICAgICAgc2hhcGUucXVhZHJhdGljQ3VydmVUbyhsZWZ0LCB0b3AsIGxlZnQsIHRvcCArIHJhZGl1cyk7XG4gICAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgICBzdXBlcihzaGFwZSwgeyBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBkZXB0aDogZGVwdGggfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgQ3ViZSBmcm9tIFwiLi9jdWJlXCI7XG5pbXBvcnQgeyBjdWJlbGV0X2RlZnMgfSBmcm9tIFwiLi91dGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmUubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gNjtcbiAgICAgICAgdGhpcy5zY2VuZS5yb3RhdGlvbi55ID0gLU1hdGguUEkgLyA0ICsgTWF0aC5QSSAvIDE2O1xuICAgICAgICB0aGlzLmFtYmllbnQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjkpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbmFsID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDAuMSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uYWwucG9zaXRpb24uc2V0KGN1YmVsZXRfZGVmcy5zaXplLCBjdWJlbGV0X2RlZnMuc2l6ZSAqIDMsIGN1YmVsZXRfZGVmcy5zaXplICogMik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYW1iaWVudCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZGlyZWN0aW9uYWwpO1xuICAgICAgICB0aGlzLnNjZW5lLnVwZGF0ZU1hdHJpeCgpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5jdWJlID0gbmV3IEN1YmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlID0gOTtcbiAgICB9XG4gICAgc2V0IGRpcnR5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY3ViZS5kaXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgZGlydHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1YmUuZGlydHk7XG4gICAgfVxuICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FtZXJhKCk7XG4gICAgfVxuICAgIHVwZGF0ZUNhbWVyYSgpIHtcbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5oZWlnaHQgLyBNYXRoLm1pbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkgLyB0aGlzLnNjYWxlIC8gdGhpcy5wZXJzcGVjdGl2ZTtcbiAgICAgICAgY29uc3QgZm92ID0gKDIgKiBNYXRoLmF0YW4obWluKSAqIDE4MCkgLyBNYXRoLlBJO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGN1YmVsZXRfZGVmcy5zaXplICogMyAqIHRoaXMucGVyc3BlY3RpdmUgKiAwLjk7XG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW1lcmEuZm92ID0gZm92O1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gZGlzdGFuY2U7XG4gICAgICAgIHRoaXMuY2FtZXJhLm5lYXIgPSBkaXN0YW5jZSAtIGN1YmVsZXRfZGVmcy5zaXplICogMztcbiAgICAgICAgdGhpcy5jYW1lcmEuZmFyID0gZGlzdGFuY2UgKyBjdWJlbGV0X2RlZnMuc2l6ZSAqIDg7XG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMygwLCAwLCAzMCkpO1xuICAgICAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVldGlmeSBmcm9tIFwidnVldGlmeVwiO1xuaW1wb3J0IFwidnVldGlmeS9kaXN0L3Z1ZXRpZnkubWluLmNzc1wiO1xuaW1wb3J0IFwibWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzc1wiO1xuaW1wb3J0IFBsYXlncm91bmQgZnJvbSBcIi4vdnVlYXBwL3BsYXlncm91bmRcIjtcblZ1ZS51c2UoVnVldGlmeSk7XG5jb25zdCBvcHRzID0ge307XG5jb25zdCB2dWV0aWZ5ID0gbmV3IFZ1ZXRpZnkob3B0cyk7XG5WdWUucHJvdG90eXBlLnZ1ZXRpZnkgPSB2dWV0aWZ5O1xubGV0IGFwcCA9IFBsYXlncm91bmQ7XG5jb25zdCB2bSA9IG5ldyBWdWUoe1xuICAgIHZ1ZXRpZnksXG4gICAgZWw6IFwiI2FwcFwiLFxuICAgIHJlbmRlcjogKGgpID0+IGgoYXBwKSxcbn0pO1xuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFByb3ZpZGUsIFJlZiwgV2F0Y2ggfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IFZpZXdwb3J0IGZyb20gXCIuLi92aWV3cG9ydFwiO1xuaW1wb3J0IFdvcmxkIGZyb20gXCIuLi8uLi9jdWJlL3dvcmxkXCI7XG5pbXBvcnQgU2V0dGluZyBmcm9tIFwiLi4vc2V0dGluZ1wiO1xuaW1wb3J0IHsgY3ViZV9jb25maWcsIGZhY2VUb0NvbG9yLCBsYmxPcmRlck1hcHBpbmcsIHN0cmluZ1RvVHdpc3RQYXJhbXMgfSBmcm9tIFwiLi4vLi4vY3ViZS91dGlsc1wiO1xuaW1wb3J0IHsgVHdpc3QsIHR3aXN0ZXIgfSBmcm9tIFwiLi4vLi4vY3ViZS90d2lzdGVyXCI7XG5pbXBvcnQgSW50ZXJhY3RvciBmcm9tIFwiLi4vLi4vY3ViZS9pbnRlcmFjdG9yXCI7XG5pbXBvcnQgQ2FwdHVyZXIgZnJvbSBcIi4uLy4uL2N1YmUvY2FwdHVyZVwiO1xuaW1wb3J0IExCTFNvbHZlciBmcm9tIFwiLi4vLi4vY3ViZS9sYmxcIjtcbmxldCBQbGF5Z3JvdW5kID0gY2xhc3MgUGxheWdyb3VuZCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMud29ybGQgPSBuZXcgV29ybGQoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy5zb2x1dGlvbiA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSA9IFtdO1xuICAgICAgICB0aGlzLmN1YmVqc0N1YmUgPSByZXF1aXJlKCdjdWJlanMnKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5lbGFwc2VkRnJhbWVzVGhyZXNob2xkID0gMzA7XG4gICAgICAgIHRoaXMubGlzdGQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYXB0dXJlciA9IG5ldyBDYXB0dXJlcigpO1xuICAgICAgICB0aGlzLmRlbW9EYXRhID0gcmVxdWlyZSgnLi9kZW1vcy5qc29uJyk7XG4gICAgICAgIHRoaXMuZGVtb0ltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmRlbW9HcmlkV2lkdGggPSAwO1xuICAgICAgICB0aGlzLmRlbW9CYWNrdXBTdGF0ZSA9IFtdO1xuICAgICAgICB0aGlzLmlzRGVtb01vZGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTb2x2ZXIgPSBuZXcgTEJMU29sdmVyKCk7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuY3ViZWpzQ3ViZS5pbml0U29sdmVyKCk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3RvciA9IG5ldyBJbnRlcmFjdG9yKFtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnQuY2FudmFzRWxlbSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wLWZsZXhcIiksXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbS1mbGV4XCIpXG4gICAgICAgIF0sIHRoaXMud29ybGQuY29udHJvbGxlci5pbnRlcmFjdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZW1vRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kZW1vSW1hZ2VzLnB1c2godGhpcy5jYXB0dXJlci5nZW5lcmF0ZSh0aGlzLmRlbW9EYXRhW2ldLnN0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kbmV4dFRpY2sodGhpcy5yZXNpemUpO1xuICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICB9XG4gICAgbG9vcCgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52aWV3cG9ydC5kcmF3KCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IE1hdGguY2VpbChNYXRoLm1pbih0aGlzLndpZHRoIC8gNiwgdGhpcy5oZWlnaHQgLyAxMikpO1xuICAgICAgICB0aGlzLmRlbW9HcmlkV2lkdGggPSB+fihNYXRoLm1pbih0aGlzLnNpemUgKiAyLCB0aGlzLndpZHRoIC8gNCkgKiAxMDApIC8gMTAwO1xuICAgICAgICB0aGlzLnZpZXdwb3J0LnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSAqIDMuNSk7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHNjcmFtYmxlKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMud29ybGQuY3ViZS5zY3JhbWJsZSgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc2V0KCk7XG4gICAgfVxuICAgIGlkbGUodmFsdWUpIHtcbiAgICAgICAgdHdpc3Rlci50d2lzdHMucHVzaChuZXcgVHdpc3QoMCwgTWF0aC5QSSwgY3ViZV9jb25maWcuZnJhbWVzICogdmFsdWUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlIC0gTWF0aC5QSSkgPCAxZS02O1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHNvbHZlKCkge1xuICAgICAgICB0aGlzLmlzUGxheWVyTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRlID0gdGhpcy53b3JsZC5jdWJlLnNlcmlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBzb2x2ZXJJZCA9IGN1YmVfY29uZmlnLnNvbHZlcklkO1xuICAgICAgICBpZiAoc29sdmVySWQgPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbGJsU3RhdGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmFjZVN0YXRlIG9mIHRoaXMuaW5pdFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbGJsU3RhdGUucHVzaChmYWNlVG9Db2xvcltmYWNlU3RhdGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxibFNvbHV0aW9uID0gdGhpcy5sYmxTb2x2ZXIuc29sdmUobGJsU3RhdGUpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIHRoaXMuc29sdXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbGJsUGhhc2Ugb2YgbGJsU29sdXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYmxPcmRlcnMgPSBsYmxQaGFzZS5zcGxpdChcIlwiKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcmRlciBvZiBsYmxPcmRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcCA9IGxibE9yZGVyTWFwcGluZ1tvcmRlcl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvbHV0aW9uLnB1c2goc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zb2x1dGlvbi5wdXNoKFwiflwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb2x2ZXJJZCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zb2x1dGlvbiA9IHRoaXMuY3ViZWpzQ3ViZVxuICAgICAgICAgICAgICAgIC5mcm9tU3RyaW5nKHRoaXMuaW5pdFN0YXRlKVxuICAgICAgICAgICAgICAgIC5zb2x2ZSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcgJykuXG4gICAgICAgICAgICAgICAgZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgdGhpcy5zb2x1dGlvbi5wdXNoKFwiflwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluaXRTdGF0ZS5qb2luKFwiXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zb2x1dGlvbi5qb2luKFwiIFwiKSk7XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoMCk7XG4gICAgICAgIHRoaXMuaWRsZSgwLjUpO1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgfVxuICAgIG9uUGxheWVyTW9kZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy53b3JsZC5jb250cm9sbGVyLmxvY2sgPSB0aGlzLmlzUGxheWVyTW9kZTtcbiAgICB9XG4gICAgb25QbGF5aW5nQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLndvcmxkLmNvbnRyb2xsZXIuZGlzYWJsZSA9IHRoaXMuaXNQbGF5aW5nO1xuICAgIH1cbiAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNQbGF5ZXJNb2RlICYmIHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA9PSB0aGlzLnNvbHV0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzcyA8IHRoaXMuc29sdXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0d2lzdGVyLmlzVHdpc3RpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzdHJpbmdUb1R3aXN0UGFyYW1zW3RoaXMuc29sdXRpb25bdGhpcy5wcm9ncmVzc11dO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHBhcmFtcy5sYXllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ybGQuY3ViZS50YWJsZS5ncm91cHNbcGFyYW1zLmF4aXNdW2xheWVyXS50d2lzdChwYXJhbXMuYW5nbGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRGcmFtZXMgPCB0aGlzLmVsYXBzZWRGcmFtZXNUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZEZyYW1lcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzID09IHRoaXMuc29sdXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzKDApO1xuICAgICAgICAgICAgdGhpcy5pZGxlKDEuNSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcXVpdCgpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1BsYXllck1vZGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEZW1vTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5pc0RlbW9Nb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLndvcmxkLmN1YmUucmVzdG9yZSh0aGlzLmRlbW9CYWNrdXBTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0UHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53b3JsZC5jdWJlLnJlc3RvcmUodGhpcy5pbml0U3RhdGUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHN0cmluZ1RvVHdpc3RQYXJhbXNbdGhpcy5zb2x1dGlvbltpXV07XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHBhcmFtcy5sYXllcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkLmN1YmUudGFibGUuZ3JvdXBzW3BhcmFtcy5heGlzXVtsYXllcl0udHdpc3QocGFyYW1zLmFuZ2xlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzID0gdmFsdWU7XG4gICAgfVxuICAgIGdyZWVuQnV0dG9uKCkge1xuICAgICAgICBpZiAodGhpcy5lbGFwc2VkRnJhbWVzIDwgdGhpcy5lbGFwc2VkRnJhbWVzVGhyZXNob2xkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGFwc2VkRnJhbWVzID0gMDtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWVyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JhbWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmx1ZUJ1dHRvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZEZyYW1lcyA8IHRoaXMuZWxhcHNlZEZyYW1lc1RocmVzaG9sZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxhcHNlZEZyYW1lcyA9IDA7XG4gICAgICAgIGlmICghdGhpcy5pc1BsYXllck1vZGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWRCdXR0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRGcmFtZXMgPCB0aGlzLmVsYXBzZWRGcmFtZXNUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsYXBzZWRGcmFtZXMgPSAwO1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5ZXJNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnF1aXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3REZW1vKGlkeCkge1xuICAgICAgICB0aGlzLmxpc3RkID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5pc0RlbW9Nb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmRlbW9CYWNrdXBTdGF0ZSA9IHRoaXMud29ybGQuY3ViZS5zZXJpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVtb01vZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGxheWVyTW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVtb05hbWUgPSB0aGlzLmRlbW9EYXRhW2lkeF0ubmFtZTtcbiAgICAgICAgdGhpcy5pbml0U3RhdGUgPSB0aGlzLmRlbW9EYXRhW2lkeF0uc3RhdGUuc3BsaXQoXCJcIik7XG4gICAgICAgIHRoaXMuc29sdXRpb24gPSB0aGlzLmRlbW9EYXRhW2lkeF0uc29sdXRpb24uc3BsaXQoJyAnKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIHRoaXMuc29sdXRpb24ucHVzaChcIn5cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5pdFN0YXRlLmpvaW4oXCJcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNvbHV0aW9uLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcygwKTtcbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgUHJvdmlkZShcIndvcmxkXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG5dLCBQbGF5Z3JvdW5kLnByb3RvdHlwZSwgXCJ3b3JsZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgUmVmKFwidmlld3BvcnRcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFZpZXdwb3J0KVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwidmlld3BvcnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIFdhdGNoKFwiaXNQbGF5ZXJNb2RlXCIpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBGdW5jdGlvbiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuXSwgUGxheWdyb3VuZC5wcm90b3R5cGUsIFwib25QbGF5ZXJNb2RlQ2hhbmdlXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgV2F0Y2goXCJpc1BsYXlpbmdcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEZ1bmN0aW9uKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXG5dLCBQbGF5Z3JvdW5kLnByb3RvdHlwZSwgXCJvblBsYXlpbmdDaGFuZ2VcIiwgbnVsbCk7XG5QbGF5Z3JvdW5kID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2luZGV4Lmh0bWxcIiksXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIHZpZXdwb3J0OiBWaWV3cG9ydCxcbiAgICAgICAgICAgIHNldHRpbmc6IFNldHRpbmcsXG4gICAgICAgIH0sXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgUGxheWdyb3VuZCk7XG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kO1xuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgY3ViZV9jb25maWcgfSBmcm9tIFwiLi4vLi4vY3ViZS91dGlsc1wiO1xuaW1wb3J0IFZ1ZVNsaWRlciBmcm9tICd2dWUtc2xpZGVyLWNvbXBvbmVudCc7XG5pbXBvcnQgJ3Z1ZS1zbGlkZXItY29tcG9uZW50L3RoZW1lL2RlZmF1bHQuY3NzJztcbmxldCBTZXR0aW5nID0gY2xhc3MgU2V0dGluZyBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IE1hdGguY2VpbChNYXRoLm1pbih0aGlzLndpZHRoIC8gNiwgdGhpcy5oZWlnaHQgLyAxMikpO1xuICAgIH1cbiAgICBnZXQgc2Vuc2liaWxpdHkoKSB7XG4gICAgICAgIHJldHVybiBjdWJlX2NvbmZpZy5zZW5zaWJpbGl0eSAqIDFlNDtcbiAgICB9XG4gICAgc2V0IHNlbnNpYmlsaXR5KHZhbHVlKSB7XG4gICAgICAgIGN1YmVfY29uZmlnLnNlbnNpYmlsaXR5ID0gdmFsdWUgKiAxZS00O1xuICAgIH1cbiAgICBnZXQgZnJhbWVzKCkge1xuICAgICAgICByZXR1cm4gY3ViZV9jb25maWcuZnJhbWVzO1xuICAgIH1cbiAgICBzZXQgZnJhbWVzKHZhbHVlKSB7XG4gICAgICAgIGN1YmVfY29uZmlnLmZyYW1lcyA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgc2NyYW1ibGVfc3RlcHMoKSB7XG4gICAgICAgIHJldHVybiBjdWJlX2NvbmZpZy5zY3JhbWJsZV9zdGVwcztcbiAgICB9XG4gICAgc2V0IHNjcmFtYmxlX3N0ZXBzKHZhbHVlKSB7XG4gICAgICAgIGN1YmVfY29uZmlnLnNjcmFtYmxlX3N0ZXBzID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzb2x2ZXJfaWQoKSB7XG4gICAgICAgIHJldHVybiBjdWJlX2NvbmZpZy5zb2x2ZXJJZDtcbiAgICB9XG4gICAgc2V0IHNvbHZlcl9pZCh2YWx1ZSkge1xuICAgICAgICBjdWJlX2NvbmZpZy5zb2x2ZXJJZCA9IHZhbHVlO1xuICAgIH1cbn07XG5TZXR0aW5nID0gX19kZWNvcmF0ZShbXG4gICAgQ29tcG9uZW50KHtcbiAgICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2luZGV4Lmh0bWxcIiksXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFZ1ZVNsaWRlclxuICAgICAgICB9XG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU2V0dGluZyk7XG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nO1xuIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSwgX19tZXRhZGF0YSB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgUmVmIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFdvcmxkIGZyb20gXCIuLi8uLi9jdWJlL3dvcmxkXCI7XG5sZXQgVmlld3BvcnQgPSBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIFZ1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IGNhbnZhc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXNFbGVtLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgIGNhbnZhczogY2FudmFzRWxlbSxcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgIGFscGhhOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmF1dG9DbGVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMCwgMCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbSA9IGNhbnZhc0VsZW07XG4gICAgfVxuICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMud29ybGQucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2lkdGgsIGhlaWdodCwgdHJ1ZSk7XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLndvcmxkLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLndvcmxkLnNjZW5lLCB0aGlzLndvcmxkLmNhbWVyYSk7XG4gICAgICAgICAgICB0aGlzLndvcmxkLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuX19kZWNvcmF0ZShbXG4gICAgSW5qZWN0KFwid29ybGRcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFdvcmxkKVxuXSwgVmlld3BvcnQucHJvdG90eXBlLCBcIndvcmxkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBSZWYoXCJjYW52YXNcIiksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEhUTUxFbGVtZW50KVxuXSwgVmlld3BvcnQucHJvdG90eXBlLCBcImNhbnZhc1wiLCB2b2lkIDApO1xuVmlld3BvcnQgPSBfX2RlY29yYXRlKFtcbiAgICBDb21wb25lbnQoe1xuICAgICAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaW5kZXguaHRtbFwiKSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgfSksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgVmlld3BvcnQpO1xuZXhwb3J0IGRlZmF1bHQgVmlld3BvcnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3J1Ymlrc2N1YmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcnViaWtzY3ViZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=