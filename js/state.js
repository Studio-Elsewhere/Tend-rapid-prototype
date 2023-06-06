import { Vector2, Vector4, Color} from "three"

export let params = {
    time: 0.0,
    speed: .9,
    color: new Color(1, 1, 1),
    scale: new Vector2(1, 1),
    offset: .07,
    resolution: new Vector2(window.innerWidth, window.innerHeight)
}

export let skyEffectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    // exposure: renderer.toneMappingExposure
};