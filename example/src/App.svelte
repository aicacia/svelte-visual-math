<script lang="ts" context="module">
  import "@aicacia/visual-math/styles/index.css";
</script>

<script lang="ts">
  import { mat2d, vec2 } from "gl-matrix";
  import {
    VisualMath,
    CartesianCoordinates,
    Ellipse,
    Circle,
    MovablePoint,
    ThroughPoints,
    PointAngle,
    PointSlope,
  } from "@aicacia/visual-math";

  export let rotationHintRadius = 4;

  let center = vec2.fromValues(0, 0);

  let translation = mat2d.create();
  $: translation = mat2d.fromTranslation(translation, center);

  let rotate = vec2.fromValues(rotationHintRadius, 0);
  $: angle = Math.PI / 2 - Math.atan2(rotate[0], rotate[1]);

  let rotation = mat2d.create();
  $: rotation = mat2d.fromRotation(rotation, angle);

  let width = vec2.fromValues(rotationHintRadius - 1, 0);
  let height = vec2.fromValues(0, rotationHintRadius - 2);

  let radius = vec2.create();
  $: radius = vec2.set(radius, width[0], height[1]);

  let transform = mat2d.create();
  $: transform = mat2d.mul(transform, translation, rotation);

  let line = vec2.create();
  $: line = vec2.transformMat2d(line, rotate, translation);

  $: rotateConstrain = (position: vec2) =>
    vec2.scale(
      position,
      vec2.normalize(position, position),
      rotationHintRadius
    );
</script>

<VisualMath width="auto" height="auto">
  <CartesianCoordinates />
  <Circle
    center="{center}"
    radius="{rotationHintRadius}"
    strokeStyle="dashed"
    strokeOpacity="{0.3}"
    fillOpacity="{0}" />
  <Ellipse center="{center}" radius="{radius}" angle="{angle}" />
  <ThroughPoints point1="{center}" point2="{line}" />
  <PointAngle point="{center}" angle="{angle}" />
  <PointSlope point="{center}" slope="{Math.PI / 4}" />
  <MovablePoint bind:point="{center}" color="{'var(--visual-math-violet)'}" />
  <MovablePoint
    bind:point="{width}"
    transform="{transform}"
    constrain="horizontal"
    color="{'var(--visual-math-indigo)'}" />
  <MovablePoint
    bind:point="{height}"
    transform="{transform}"
    constrain="vertical"
    color="{'var(--visual-math-blue)'}" />
  <MovablePoint
    bind:point="{rotate}"
    transform="{translation}"
    constrain="{rotateConstrain}"
    color="{'var(--visual-math-pink)'}" />
</VisualMath>
