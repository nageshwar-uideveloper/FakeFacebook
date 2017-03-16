import React,{Component} from "react";
import {render} from "react-dom";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Bootstrap from "bootstrap-sass/assets/javascripts/bootstrap";

import Main from 'styles/main.scss';
import Login from "components/login.jsx";
import Home from "components/home.jsx";
import Routers from "components/routers.jsx";



render(
    <Routers />
,document.getElementById('app'));
