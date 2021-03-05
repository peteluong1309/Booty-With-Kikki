import {call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* example(){
    console.log('test');
}

export default function* rootSage(){
    yield all([
        example(),
    ])
};