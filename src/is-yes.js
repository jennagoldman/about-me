export default function isYes(str) {
    const myString = str.toLowerCase();

    if (myString === 'yes' || myString === 'y') {
        return true;
    } else {
        return false;
    }
}