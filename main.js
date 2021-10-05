function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const wallet_1 = {
        color_dot_1: [0.635, 0.490, 0.29],
        color_dot_2:[0.1803,0.125,0.125],
        dot_N1: [-0.7407617846272, 0.2395672065039],
        dot_R: [-0.7388562172747, 0.1989232620233],
        dot_S: [-0.7343301923896, 0.1514000007292],
        dot_T: [-0.7331986861683, 0.0869041461157],
        dot_U: [-0.7343301923896, 0.0088302168468],
        dot_Q: [-0.7875109847901, -0.0375615382261],
        dot_H1: [-0.7807219474624, -0.1167669737163],
        dot_I1: [-0.7682753790282, -0.1835258407723],
        dot_V: [-0.7569603168153, -0.2582052513774],
        dot_M1: [-0.6151758394329, -0.2209145925422],
        dot_W: [-0.4978453921402, -0.1846573469936],
        dot_A1: [-0.3281194589468, -0.1337395670356],
        dot_B1: [-0.3134098780701, -0.099794380397],
        dot_C1: [-0.2851222225378, -0.00587936403],
        dot_D1: [-0.600552779047, 0.0147625274732],
        dot_P :[-0.4089984372236, 0.0671299014969],
        dot_O: [-0.2873852349804, 0.0835096274519],
        dot_M: [-0.2602290856695, 0.1140602954267],
        dot_N: [-0.2613605918908, 0.0970877021073],
        dot_E1: [-0.6279686075884, 0.0246713039448],
        dot_F1: [-0.5013303861601, 0.0395681256949],
        dot_G1: [-0.3575386207003, 0.0823781212306],
        dot_L: [-0.2885167412017, 0.1412164447376],
        dot_P1: [-0.3333732307041, 0.1691165543217],
        dot_O1: [-0.3803403321589, 0.186473961381],
        dot_K: [-0.4491906246247, 0.1932657309169],
        dot_J: [-0.5317905787788, 0.2125013366788],
        dot_I: [-0.6087330018265, 0.2260794113343],
        dot_H: [-0.6800178937677, 0.2396574859897],
        dot_G: [-0.732067179947, 0.2532355606452],
        dot_J1: [-0.295011224076, 0.1156063515135],
        dot_Z:[-0.3813002513474, -0.1518436665762],
        dot_K1:[-0.7333781224676, -0.0178731206923]
    };

    const wallet_2 = {
        color_dot_1: [0.635, 0.490, 0.29],
        color_dot_2:[0.1803,0.125,0.125],
        dot_T1: [0.3377960302505, 0.2773725256746],
        dot_O2: [0.3784782540021, 0.2225798770699],
        dot_M2: [0.430639267846, 0.1489407987021],
        dot_N2: [0.4654132770752, 0.077347250289],
        dot_L2: [0.5001872863044, 0.0190496465812],
        dot_K2: [0.5, 0],
        dot_A3: [0.520614011016, -0.0127568398384],
        dot_Z2: [0.5395913803129, -0.0077627952866],
        dot_J2: [0.5564393600575, 0.0241634714679],
        dot_I2: [0.6096231388787, 0.1438269738155],
        dot_H2: [0.61678249372, 0.17655545309],
        dot_G2: [0.6311012034026, 0.2072384024099],
        dot_F2: [0.6770235758736, 0.2744405676312],
        dot_E2: [0.6668979776092, 0.2348530567978],
        dot_D2: [0.6770235758736, 0.2744405676312],
        dot_C2: [0.613714198788, 0.0579147157198],
        dot_B2: [0.5716046062022, 0.0025681450085],
        dot_A2: [0.5165515259417, -0.0290203073533],
        dot_Z1: [0.4735953968938, -0.0106105377613],
        dot_W1: [0.4193888530953, 0.080415545221],
        dot_V1: [0.3835920788888, 0.1561001535434],
        dot_U1: [0.340709358268, 0.2544317634271],
        dot_W2: [0.3683215824306, 0.020242193685],
        dot_V2: [0.411708701906, -0.0829034126112],
        dot_U2: [0.4494320030089, -0.1609137343095],
        dot_T2: [0.4875215497536, -0.2367265821572],
        dot_S2: [0.5072988144095, -0.2568700924548],
        dot_R2: [0.5516937305627, -0.2315277728646],
        dot_Q2: [0.6098583748235, -0.0731219331757],
        dot_P2: [0.6432721066329, 0.0407322641006],
        dot_E3: [0.52, -0.26],
        dot_B3: [0.6694004849607, 0.2761997424572],
        dot_D3: [0.3377960302505, 0.2773725256746],
        dot_C3: [0.3498170582285, 0.2782521130876],
        dot_F3:[0.6735585925519, 0.200477532402]
    };

    const vertices = [
        //Left Object
 
        ...wallet_1.dot_T, ...wallet_1.color_dot_2,
        ...wallet_1.dot_K1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_T, ...wallet_1.color_dot_2,
        ...wallet_1.dot_S, ...wallet_1.color_dot_2,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,
    
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_S, ...wallet_1.color_dot_2,
        ...wallet_1.dot_R, ...wallet_1.color_dot_2,

        ...wallet_1.dot_R, ...wallet_1.color_dot_2,
        ...wallet_1.dot_H, ...wallet_1.color_dot_2,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,
 
        ...wallet_1.dot_N1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_R, ...wallet_1.color_dot_2,
        ...wallet_1.dot_H, ...wallet_1.color_dot_2,
 
        ...wallet_1.dot_G, ...wallet_1.color_dot_2,
        ...wallet_1.dot_N1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_H, ...wallet_1.color_dot_2,

        ...wallet_1.dot_H, ...wallet_1.color_dot_2,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_I, ...wallet_1.color_dot_2,
 
        ...wallet_1.dot_I, ...wallet_1.color_dot_2,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_F1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_I, ...wallet_1.color_dot_2,
        ...wallet_1.dot_F1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_J, ...wallet_1.color_dot_2,
 
        ...wallet_1.dot_K, ...wallet_1.color_dot_2,
        ...wallet_1.dot_F1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_J, ...wallet_1.color_dot_2,
    
        ...wallet_1.dot_K, ...wallet_1.color_dot_2,
        ...wallet_1.dot_F1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_P, ...wallet_1.color_dot_2,
  
        ...wallet_1.dot_K, ...wallet_1.color_dot_2,
        ...wallet_1.dot_P, ...wallet_1.color_dot_2,
        ...wallet_1.dot_O1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_O1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_G1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_P, ...wallet_1.color_dot_2,
   
        ...wallet_1.dot_O1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_G1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_P1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_G1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_P1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_L, ...wallet_1.color_dot_2,

        ...wallet_1.dot_G1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_L, ...wallet_1.color_dot_2,
        ...wallet_1.dot_J1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_O, ...wallet_1.color_dot_2,
        ...wallet_1.dot_J1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_G1, ...wallet_1.color_dot_2,

        ...wallet_1.dot_L, ...wallet_1.color_dot_2,
        ...wallet_1.dot_J1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_M, ...wallet_1.color_dot_2,

        ...wallet_1.dot_J1, ...wallet_1.color_dot_2,
        ...wallet_1.dot_M, ...wallet_1.color_dot_2,
        ...wallet_1.dot_O, ...wallet_1.color_dot_2,

        ...wallet_1.dot_M, ...wallet_1.color_dot_1,
        ...wallet_1.dot_O, ...wallet_1.color_dot_1,
        ...wallet_1.dot_N, ...wallet_1.color_dot_1,

        ...wallet_1.dot_N, ...wallet_1.color_dot_1,
        ...wallet_1.dot_O, ...wallet_1.color_dot_1,
        ...wallet_1.dot_C1, ...wallet_1.color_dot_1,
    
        ...wallet_1.dot_C1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_O, ...wallet_1.color_dot_1,
        ...wallet_1.dot_G1, ...wallet_1.color_dot_1,

        ...wallet_1.dot_C1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_G1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_B1, ...wallet_1.color_dot_1,

        ...wallet_1.dot_G1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_B1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_P, ...wallet_1.color_dot_1,
     
        ...wallet_1.dot_B1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_P, ...wallet_1.color_dot_1,
        ...wallet_1.dot_A1, ...wallet_1.color_dot_1,
       
        ...wallet_1.dot_A1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_P, ...wallet_1.color_dot_1,
        ...wallet_1.dot_Z, ...wallet_1.color_dot_1,
   
        ...wallet_1.dot_P, ...wallet_1.color_dot_1,
        ...wallet_1.dot_Z, ...wallet_1.color_dot_1,
        ...wallet_1.dot_F1, ...wallet_1.color_dot_1,
   
        ...wallet_1.dot_F1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_W, ...wallet_1.color_dot_1,
        ...wallet_1.dot_Z, ...wallet_1.color_dot_1,
 
        ...wallet_1.dot_F1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_W, ...wallet_1.color_dot_1,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_1,
        
        ...wallet_1.dot_W, ...wallet_1.color_dot_1,
        ...wallet_1.dot_D1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_M, ...wallet_1.color_dot_1,
        
        ...wallet_1.dot_D1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_M1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_K1, ...wallet_1.color_dot_1,
        
        ...wallet_1.dot_D1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_M1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_W, ...wallet_1.color_dot_1,

        ...wallet_1.dot_M1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_K1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_V, ...wallet_1.color_dot_1,

        ...wallet_1.dot_K1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_V, ...wallet_1.color_dot_1,
        ...wallet_1.dot_I1, ...wallet_1.color_dot_1,
        
        ...wallet_1.dot_I1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_H1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_K1, ...wallet_1.color_dot_1,

        ...wallet_1.dot_K1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_H1, ...wallet_1.color_dot_1,
        ...wallet_1.dot_Q, ...wallet_1.color_dot_1,


        //Right Object

        ...wallet_2.dot_T1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_D3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_C3, ...wallet_2.color_dot_2,

        ...wallet_2.dot_D3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_C3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_U1, ...wallet_2.color_dot_2,

        ...wallet_2.dot_C3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_U1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_O2, ...wallet_2.color_dot_2,
   
        ...wallet_2.dot_U1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_O2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_V1, ...wallet_2.color_dot_2,

        ...wallet_2.dot_O2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_V1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_M2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_V1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_M2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_W1, ...wallet_2.color_dot_2,
 
        ...wallet_2.dot_M2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_W1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_N2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_W1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_N2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_Z1, ...wallet_2.color_dot_2,

        ...wallet_2.dot_N2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_Z1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_L2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_Z1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_L2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_K2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_Z1, ...wallet_2.color_dot_2,
        ...wallet_2.dot_K2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_A2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_K2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_A2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_A3, ...wallet_2.color_dot_2,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_A3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_Z2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_Z2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_A2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_B2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_Z2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_J2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_B2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_B2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_C2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_J2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_C2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_J2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_I2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_C2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_I2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_D2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_I2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_D2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_H2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_D2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_H2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_E2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_H2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_E2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_G2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_E2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_G2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_B3, ...wallet_2.color_dot_2,

        ...wallet_2.dot_E2, ...wallet_2.color_dot_2,
        ...wallet_2.dot_B3, ...wallet_2.color_dot_2,
        ...wallet_2.dot_F2, ...wallet_2.color_dot_2,

        ...wallet_2.dot_F2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_E2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_F3, ...wallet_2.color_dot_1,

        ...wallet_2.dot_E2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_F3, ...wallet_2.color_dot_1,
        ...wallet_2.dot_D2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_F3, ...wallet_2.color_dot_1,
        ...wallet_2.dot_D2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_P2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_D2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_P2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_C2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_P2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_C2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_B2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_P2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_B2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_Q2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_B2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_Q2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_Q2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_R2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_R2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_E3, ...wallet_2.color_dot_1,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_E3, ...wallet_2.color_dot_1,
        ...wallet_2.dot_S2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_S2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_T2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_T2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_U2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_A2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_U2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_Z1, ...wallet_2.color_dot_1,

        ...wallet_2.dot_U2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_Z1, ...wallet_2.color_dot_1,
        ...wallet_2.dot_V2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_Z1, ...wallet_2.color_dot_1,
        ...wallet_2.dot_V2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_W1, ...wallet_2.color_dot_1,

        ...wallet_2.dot_V2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_W1, ...wallet_2.color_dot_1,
        ...wallet_2.dot_W2, ...wallet_2.color_dot_1,

        ...wallet_2.dot_W1, ...wallet_2.color_dot_1,
        ...wallet_2.dot_W2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_V1, ...wallet_2.color_dot_1,

        ...wallet_2.dot_W2, ...wallet_2.color_dot_1,
        ...wallet_2.dot_V1, ...wallet_2.color_dot_1,
        ...wallet_2.dot_U1, ...wallet_2.color_dot_1,

    ];
console.log(vertices.length);
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0232;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[626] < -0.7 || vertices[701] > 0.7) {
            speed = speed * -1;
        }
        
        for (let i=541; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 234;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}
