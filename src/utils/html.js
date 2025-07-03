// utils/html.js
export function html(strings, ...values) {
    // Reconstruct the full raw string
    let str = strings.raw
        .map((s, i) => (values[i] !== undefined ? s + values[i] : s))
        .join('');

    // Split into lines and remove the first & last empty lines
    const lines = str.split('\n');
    lines.shift();
    lines.pop();

    // Figure out the minimum indent from all lines
    const indent = Math.min(
        ...lines
            .filter(line => line.trim())
            .map(line => line.match(/^ */)[0].length)
    );

    // Trim that indent off every line and rejoin
    return lines.map(line => line.slice(indent)).join('\n');
}
