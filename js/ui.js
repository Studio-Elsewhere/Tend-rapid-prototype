import { params, skyEffectController } from './state.js';
import { Pane } from 'tweakpane';

export const initUI = () => {
    const pane = new Pane();
    const f1 = pane.addFolder({
        title: 'Shader1',
    });

    f1.addInput(params, 'speed', {
        min: -2.0,
        max: 2.0,
    });

    f1.addInput(params, 'color', {
        color: {type: 'float'},
    });

    f1.addInput(params, 'scale', {
        min: -2.0,
        max: 2,
    });
    
    f1.addInput(params, 'offset', {
        min: .01,
        max: .2,
    });

    // SKY UI
    const f2 = pane.addFolder({
        title: 'Sky',
    });

    f2.addInput(skyEffectController, 'turbidity', {
        min: 0.0,
        max: 20.0,
    });

    f2.addInput(skyEffectController, 'rayleigh', {
        min: 0.0,
        max: 4.0,
    });

    f2.addInput(skyEffectController, 'mieCoefficient', {
        min: 0.0,
        max: 0.1,
    });

    f2.addInput(skyEffectController, 'mieDirectionalG', {
        min: 0.0,
        max: 1.0,
    });

    f2.addInput(skyEffectController, 'elevation', {
        min: 0.0,
        max: 90.0,
    });

    f2.addInput(skyEffectController, 'azimuth', {
        min: -180.0,
        max: 180.0,
    });

    // f2.addInput(skyEffectController, 'exposure', {
    //     min: 0.0,
    //     max: 1.0,
    // });    
}