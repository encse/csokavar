import StateInline from "markdown-it/lib/rules_inline/state_inline";

export function iframe(state: StateInline, src: string){
    let token = state.push("div_open", "div", 1);
    token.attrs = [["class", "iframe-container"]];

    token = state.push("div_open", "div", 1);
    token.attrs = [["style", "padding-top: 75%;position: relative;"]];

    token = state.push("div_open", "div", 1);
    token.attrs = [["style", "position: absolute;top: 0;bottom: 0;left: 0;right: 0;"]];
    token = state.push("div_close", "div", -1);

    token = state.push("div_close", "div", -1);

    token = state.push("div_open", "div", 1);
    token.attrs = [["style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0; text-align: center;"]];
    
    token = state.push("div_open", "div", 1);
    token.attrs = [["style", "display: inline-block; height: 100%; position: relative;"]];

    token = state.push("img_open", "img", 0);
    token.attrs = [
        ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAADklEQVR42mNkgAJGDAYAAFEABCaLYqoAAAAASUVORK5CYII="],
        ["style", "height: 100%;"]
    ];

    token = state.push("iframe_open", "iframe", 1);
    token.attrs = [
        ["frameborder", "0"],
        ["src", src]
    ];
    token = state.push("iframe_close", "iframe", -1);

    token = state.push("div_close", "div", -1);

    token = state.push("div_close", "div", -1);
    token = state.push("div_close", "div", -1);
}