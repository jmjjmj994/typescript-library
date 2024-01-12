let MILLISECONDS = 1000;
export function handleError(target, message) {
    target.style.cssText = "border:1px solid red;";
    setTimeout(() => {
        target.style.cssText = "";
    }, 200);
}
