function* idGenerator() {
    let id = 0;
    while (id < id + 1) {
        yield id++;
    }
}

const generator = idGenerator();

export function ID(): number {
    return generator.next().value;
}
