export function processInput(input: string): { list1: number[], list2: number[] } {
    const lines = input.trim().split("\n");
    const list1: number[] = [];
    const list2: number[] = [];

    for (const line of lines) {
        const [num1, num2] = line.trim().split(/\s+/).map(Number);
        if (!isNaN(num1) && !isNaN(num2)) {
            list1.push(num1);
            list2.push(num2);
        }
    }

    return { list1, list2 };
}