import { cubelet_defs, cubelet_core, cubelet_lambers, cubelet_basics, cubelet_frame, cubelet_sticker, cubelet_mirror } from "./utils";
import * as THREE from "three";
import { Face } from "./utils_internal";

export default class Cubelet extends THREE.Group {
  _vector: THREE.Vector3;
  _quaternion: THREE.Quaternion;
  _index: number;


  mirrors: THREE.Mesh[];
  lamberts: (THREE.MeshLambertMaterial | undefined)[];
  basics: (THREE.MeshBasicMaterial | undefined)[];


  frame: THREE.Mesh;
  order: number;

  initial: number;
  stickers: THREE.Mesh[];

  set vector(vector: THREE.Vector3) {
    const half = (this.order - 1) / 2;
    let x = Math.round(vector.x * 2) / 2;
    let y = Math.round(vector.y * 2) / 2;
    let z = Math.round(vector.z * 2) / 2;
    this._vector.set(x, y, z);
    x = Math.round(x + half);
    y = Math.round(y + half);
    z = Math.round(z + half);
    this._index = z * this.order * this.order + y * this.order + x;
    this.position.x = cubelet_defs.size * this._vector.x;
    this.position.y = cubelet_defs.size * this._vector.y;
    this.position.z = cubelet_defs.size * this._vector.z;
  }

  get vector(): THREE.Vector3 {
    return this._vector;
  }

  set index(index: number) {
    const half = (this.order - 1) / 2;
    const _x = (index % this.order) - half;
    const _y = Math.floor((index % (this.order * this.order)) / this.order) - half;
    const _z = Math.floor(index / (this.order * this.order)) - half;
    this.vector = new THREE.Vector3(_x, _y, _z);
  }

  get index(): number {
    return this._index;
  }

  constructor(index: number) {
    super();
    this._vector = new THREE.Vector3();
    this._quaternion = new THREE.Quaternion();
    this.order = cubelet_defs.order;
    this.initial = index;
    this.index = index;
    this.stickers = [];
    this.mirrors = [];

    const half = (this.order - 1) / 2;

    this.lamberts = [
      this.vector.x == -half ? cubelet_lambers.L : undefined,
      this.vector.x == half ? cubelet_lambers.R : undefined,
      this.vector.y == -half ? cubelet_lambers.D : undefined,
      this.vector.y == half ? cubelet_lambers.U : undefined,
      this.vector.z == -half ? cubelet_lambers.B : undefined,
      this.vector.z == half ? cubelet_lambers.F : undefined,
    ];

    this.basics = [
      this.vector.x == -half ? cubelet_basics.L : undefined,
      this.vector.x == half ? cubelet_basics.R : undefined,
      this.vector.y == -half ? cubelet_basics.D : undefined,
      this.vector.y == half ? cubelet_basics.U : undefined,
      this.vector.z == -half ? cubelet_basics.B : undefined,
      this.vector.z == half ? cubelet_basics.F : undefined,
    ];

    this.frame = new THREE.Mesh(cubelet_frame, cubelet_core);
    this.add(this.frame);

    for (let i = 0; i < 6; i++) {
      if (this.lamberts[i] != undefined) {
        const _sticker = new THREE.Mesh(cubelet_sticker, this.lamberts[i]);
        switch (i) {
          case Face.L:
            _sticker.rotation.y = -Math.PI / 2;
            _sticker.position.x = -cubelet_defs.size / 2;
            break;
          case Face.R:
            _sticker.rotation.y = Math.PI / 2;
            _sticker.position.x = cubelet_defs.size / 2;
            break;
          case Face.D:
            _sticker.rotation.x = Math.PI / 2;
            _sticker.position.y = -cubelet_defs.size / 2;
            break;
          case Face.U:
            _sticker.rotation.x = -Math.PI / 2;
            _sticker.position.y = cubelet_defs.size / 2;
            break;
          case Face.B:
            _sticker.rotation.x = Math.PI;
            _sticker.position.z = -cubelet_defs.size / 2;
            break;
          case Face.F:
            _sticker.rotation.x = 2 * Math.PI;
            _sticker.position.z = cubelet_defs.size / 2;
            break;
          default:
            break;
        }
        this.add(_sticker);
        this.stickers[i] = _sticker;
        const _mirror = new THREE.Mesh(cubelet_mirror, this.basics[i]);
        _mirror.rotation.x = _sticker.rotation.x == 0 ? 0 : _sticker.rotation.x + Math.PI;
        _mirror.rotation.y = _sticker.rotation.y == 0 ? 0 : _sticker.rotation.y + Math.PI;
        _mirror.rotation.z = _sticker.rotation.z == 0 ? 0 : _sticker.rotation.z + Math.PI;
        if (_mirror.rotation.x + _mirror.rotation.y + _mirror.rotation.z == 0) {
          _mirror.rotation.y = Math.PI;
        }

        _mirror.position.x = _sticker.position.x * (this.order + 1);
        _mirror.position.y = _sticker.position.y * (this.order + 1);
        _mirror.position.z = _sticker.position.z * (this.order + 1);
        this.mirrors[i] = _mirror;
      }
    }
    this.matrixAutoUpdate = false;
    this.updateMatrix();
  }

  stick(face: number, value: string): void {
    let lamber;
    let basic;
    if (this.stickers[face] === undefined) {
      return;
    }
    if (value == "remove") {
      this.stickers[face].visible = false;
      this.mirrors[face].visible = false;
      return;
    }
    this.stickers[face].visible = true;
    this.mirrors[face].visible = true;
    if (value && value.length > 0) {
      lamber = cubelet_lambers[value];
      basic = cubelet_basics[value];
    } else {
      lamber = this.lamberts[face];
      basic = this.basics[face];
    }
    if (lamber === undefined || basic === undefined) {
      return;
    }
    this.stickers[face].material = lamber;
    if (this.mirrors[face] instanceof THREE.Mesh) {
      this.mirrors[face].material = basic;
    }
  }

  
  getFace(face: Face): number {
    const position = new THREE.Vector3(0, 0, 0);
    switch (face) {
      case Face.L:
        position.x = -1;
        break;
      case Face.R:
        position.x = 1;
        break;
      case Face.D:
        position.y = -1;
        break;
      case Face.U:
        position.y = 1;
        break;
      case Face.B:
        position.z = -1;
        break;
      case Face.F:
        position.z = 1;
        break;
      default:
        break;
    }
    this._quaternion.copy(this.quaternion);
    position.applyQuaternion(this._quaternion.invert());
    const x = Math.round(position.x);
    const y = Math.round(position.y);
    const z = Math.round(position.z);
    let color = 0;
    if (x < 0) {
      color = Face.L;
    } else if (x > 0) {
      color = Face.R;
    } else if (y < 0) {
      color = Face.D;
    } else if (y > 0) {
      color = Face.U;
    } else if (z < 0) {
      color = Face.B;
    } else if (z > 0) {
      color = Face.F;
    }
    return color;
  }

  getColor(face: Face): string {
    const sticker = this.stickers[this.getFace(face)];
    if (!sticker || !sticker.visible) {
      return "?";
    }
    switch (sticker.material) {
      case cubelet_lambers.L:
        return "L";
      case cubelet_lambers.R:
        return "R";
      case cubelet_lambers.F:
        return "F";
      case cubelet_lambers.B:
        return "B";
      case cubelet_lambers.U:
        return "U";
      case cubelet_lambers.D:
        return "D";
    }
    return "?";
  }
}