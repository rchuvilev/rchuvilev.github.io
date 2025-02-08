// @ts-ignore
import ShaderCanvas from '@signal-noise/react-shader-canvas';
import {useResize} from "@/effects/useResize.js";

export const BcgGlslPurple = ({fragmentShaderSource}: any) => {
    const [width, height] = useResize();
    const fragmentShader = fragmentShaderSource || `
    #ifdef GL_ES
    precision mediump float;
    #endif

    #extension GL_OES_standard_derivatives : enable

    #define NUM_OCTAVES 1

    uniform float u_time;
    uniform vec2 u_resolution;

    mat3 rotX(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat3(
            0.5, 0, 0,
            0, c, -s,
            0, s, c
        );
    }
    mat3 rotY(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat3(
            c, 0, -s,
            0, 1, 0,
            s, 0, c
        );
    }

    float random(vec2 pos) {
        return fract(sin(dot(pos.xy, vec2(1399.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 pos) {
        vec2 i = floor(pos);
        vec2 f = fract(pos);
        float a = random(i + vec2(0.0, 0.0));
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 pos) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i=0; i<NUM_OCTAVES; i++) {
            v += a * noise(pos);
            pos = rot * pos * 2.0 + shift;
            a *= 0.5;
        }
        return v;
    }

    void main(void) {
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

        float t = 0.0, d;

        float time2 = 0.6 * u_time / 2.0;

        vec2 q = vec2(2.0);
        q.x = fbm(p + 1.30 * time2);
        q.y = fbm(p + vec2(1.0));
        vec2 r = vec2(0.0);
        r.x = fbm(p + 1.0 * q + vec2(1.2, 3.2) + 0.135 * time2);
        r.y = fbm(p + 1.0 * q + vec2(8.8, 2.8) + 0.126 * time2);
        float f = fbm(p + r);
        vec3 color = mix(
            vec3(0.0, 0.0, 0),
            vec3(1, 0, 0.7),
            clamp((f * f) * 5.1, 0.0, 5.0)
        );

        color = mix(
            color,
            vec3(0, 0, 1),
            clamp(length(q), 0.0, 1.0)
        );


        color = mix(
            color,
            vec3(0.3, 1, 1),
            clamp(length(r.x), 0.0, 1.0)
        );

        color = (f * f * f + 0.6 * f * f + 0.9 * f) * color;

        gl_FragColor = vec4(color, 5.0);
    }
    `;

    return (
        <ShaderCanvas
            width={width / 100}
            height={height / 100}
            className="BcgGlslPurple"
            style={{
                minWidth: `100vw`,
                minHeight: `100vh`,
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                pointerEvents: 'none',
            }}
            fragShader={fragmentShader}
        />);
};
