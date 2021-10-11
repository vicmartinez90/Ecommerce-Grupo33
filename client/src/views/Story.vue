<template>
  <h1 class="title">Historia de la panela Colombiana</h1>
  <div class="card">
    <img src="../assets/header-vt.png" alt="Historia panela" />
  </div>

  <!-- START THE FEATURETTES -->

  <hr class="featurette-divider" />

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">
        ¿De donde salió
        <span class="text-muted">la panela?</span>
      </h2>
      <p class="lead">
        La panela tiene su origen en la caña de azúcar, planta originaria de
        Nueva Guinea que llegó a Colombia en la época de la conquista española
        en 1538 y se fue expandiendo a lo largo y ancho del territorio nacional.
        En ese tiempo las casas de los campesinos tenían pequeños trapiches poco
        estructurados que eran usados para moler la caña y producir el famoso
        guarapo.
      </p>
    </div>
    <div class="col-md-5">
      <img
        src="../assets/antigua.jpg"
        alt="antigua"
        class="
          bd-placeholder-img bd-placeholder-img-lg
          featurette-image
          img-fluid
          mx-auto
        "
        width="500"
        height="500"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
    </div>
  </div>

  <hr class="featurette-divider" />

  <div class="row featurette">
    <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading">
        ¿ Como empezó
        <span class="text-muted">todo?</span>
      </h2>
      <p class="lead">
        sesenta mil hombres africanos llegaron a Colombia en 1650 para
        encargarse de la mano de obra en los cultivos de caña, que se
        desarrollaron en tierras de clima cálido. Aunque este arduo trabajo se
        dio por muchos años, los avances tecnológicos y las nuevas herramientas
        permitieron que se reemplazara la fuerza humana y animal por motores y
        sistemas hidráulicos que hacían la tarea mucho más fácil.
      </p>
    </div>
    <div class="col-md-5 order-md-1">
      <img
        src="../assets/Historia.jpg"
        alt="Historia"
        class="
          bd-placeholder-img bd-placeholder-img-lg
          featurette-image
          img-fluid
          mx-auto
        "
        width="500"
        height="500"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
    </div>
  </div>

  <hr class="featurette-divider" />

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading">
        ¿Es conocido en otros <span class="text-muted">paises?</span>
      </h2>
      <p class="lead">
        Después de conocer la historia de este dulce producto, famoso en toda
        Colombia, debes saber que también hace parte de la gastronomía en otros
        países del continente americano; por ejemplo, es popular en Venezuela,
        en México se le conoce como Piloncillo, otros países de Centro América
        le llaman Papelón y en Bolivia, Perú y Ecuador se le llama Chancaca,
        naciones en las que es utilizado en distintas preparaciones y platos
        típicos. Tener en la mesa este delicioso manjar requiere de un gran
        proceso de sembrado, extracción, molienda y prensado, en el cual
        participan diferentes personajes, cada uno con una función distinta. El
        prensero, el bojotero, el relimpiador, el atizador, el pailero, el
        templador, la cocinera, entre otros, son indispensables en la
        producción. Más adelante explicaremos ese proceso y cómo se llega al
        resultado de los bloques de panela.
      </p>
    </div>
    <div class="col-md-5">
      <img
        src="../assets/mula.png"
        alt="mula"
        class="
          bd-placeholder-img bd-placeholder-img-lg
          featurette-image
          img-fluid
          mx-auto
        "
        width="300"
        height="300"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
    </div>
  </div>

  <hr class="featurette-divider" />

  <!-- /END THE FEATURETTES -->
</template>

<script>
export default {};
</script>
 
<style>
.title {
  color: blue;
  text-align: center;
}

.card {
  display: flex;
  justify-content: center;
}

.lead {
  text-justify: auto;
}
</style>