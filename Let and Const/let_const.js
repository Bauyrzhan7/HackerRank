function main() {
    const PI = Math.PI;
    const radius = +readLine();
    let area = radius * radius * PI;
    console.log(area);
    let perimeter = 2 * radius * PI;
    console.log(perimeter);
}