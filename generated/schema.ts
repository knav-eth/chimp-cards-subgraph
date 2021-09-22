// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ChimpCard extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ChimpCard entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ChimpCard entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ChimpCard", id.toString(), this);
  }

  static load(id: string): ChimpCard | null {
    return store.get("ChimpCard", id) as ChimpCard | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numericId(): i32 {
    let value = this.get("numericId");
    return value.toI32();
  }

  set numericId(value: i32) {
    this.set("numericId", Value.fromI32(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get chimpId(): i32 {
    let value = this.get("chimpId");
    return value.toI32();
  }

  set chimpId(value: i32) {
    this.set("chimpId", Value.fromI32(value));
  }

  get adventureCardId(): i32 {
    let value = this.get("adventureCardId");
    return value.toI32();
  }

  set adventureCardId(value: i32) {
    this.set("adventureCardId", Value.fromI32(value));
  }

  get adventureCardOffset(): i32 {
    let value = this.get("adventureCardOffset");
    return value.toI32();
  }

  set adventureCardOffset(value: i32) {
    this.set("adventureCardOffset", Value.fromI32(value));
  }

  get image(): string {
    let value = this.get("image");
    return value.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get edition(): i32 {
    let value = this.get("edition");
    return value.toI32();
  }

  set edition(value: i32) {
    this.set("edition", Value.fromI32(value));
  }
}