import serverless from "serverless-http";
import express from "express";
import { routerPost, routerGet, routerSwapi } from "./routes";

const appGet = express();
appGet.use(express.json());
appGet.use(express.urlencoded({ limit: '50mb', extended: true }));
appGet.use('/swapi', routerSwapi);
appGet.use('/api', routerGet);

const appPost = express();
appPost.use(express.json());
appPost.use('/api', routerPost);

export const getHandler = serverless(appGet);
export const postHandler = serverless(appPost);
