gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.idToCallbackMap = new Map();


gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.GameoverCode.eventsList0(runtimeScene);


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
