let MILLISECONDS:number = 1000;
export function handleError(target: HTMLElement, message: string): void {
 target.style.cssText = "border:1px solid red;";
setTimeout(() => {
    target.style.cssText =""
}, 200);


    
}