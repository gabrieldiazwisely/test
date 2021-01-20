import React from "react";

import { withAuthorization } from "../auth";
import { SignIn, SignOut, Register, ForgotPassword } from "../components";
import {
  Dashboard,
  Setting,
  Desgaste,
  SimManto,
  CameraGeometry,
  //-------- Setting-----------
  SettingCalculation,
  IncrementoPoste,
  SimulacionIngresoManto,
  //-------- Desgaste-----------
  PerfilDesgaste,
  MapaEspesores,
  //-------- Geometria de Camara-----------
  Deformaciones,
  AnguloCamara,
} from "../views";

const User = withAuthorization(["user"], { unauthorized: <div>403</div> }); // TODO

export const routePaths = [
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "SignIn",
    path: "/signin",
    component: SignIn,
  },
  {
    name: "ForgotPassword",
    path: "/forgotpassword",
    component: ForgotPassword,
  },
  {
    name: "SignOut",
    path: "/signout",
    component: SignOut,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    // component: User(Dashboard),
    component: Dashboard,
    exact: true,
    // needAuth: true
  },
  {
    name: "Setting",
    path: "/setting",
    // component: User(Setting),
    component: Setting,
    component: Setting,
    exact: true,
    // needAuth: true
  },
  {
    name: "Desgaste",
    path: "/wear",
    // component: User(Desgaste),
    component: Desgaste,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Sim. Manto",
    path: "/sim-manto",
    // component: User(SimManto),
    exact: true,
    // needAuth: true,
  },
  {
    name: "Geometría de cámara",
    path: "/camera-geometry",
    // component: User(CameraGeometry),
    component: CameraGeometry,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Calculo de setting",
    path: "/setting/setting-calculation",
    // component: User(SettingCalculation),
    component: SettingCalculation,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Incremento poste",
    path: "/setting/incremento-poste",
    // component: User(IncrementoPoste),
    component: IncrementoPoste,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Simulación ingreso manto",
    path: "/setting/simulacion-ingreso-manto",
    // component: User(SimulacionIngresoManto),
    component: SimulacionIngresoManto,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Perfil de desgaste",
    path: "/wear/perfil-desgaste",
    // component: User(PerfilDesgaste),
    component: PerfilDesgaste,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Mapa de espesores",
    path: "/wear/mapa-espesores",
    // component: User(MapaEspesores),
    component: MapaEspesores,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Deformaciones",
    path: "/camera-geometry/deformaciones",
    // component: User(Deformaciones),
    component: Deformaciones,
    exact: true,
    // needAuth: true,
  },
  {
    name: "Ángulo cámara",
    path: "/camera-geometry/angulo-camara",
    // component: User(AnguloCamara),
    component: AnguloCamara,
    exact: true,
    // needAuth: true,
  },
];
