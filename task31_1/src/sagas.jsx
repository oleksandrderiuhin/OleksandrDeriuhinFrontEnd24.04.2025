import { put, takeEvery, delay } from 'redux-saga/effects';
import { fetchTodos, setTodos } from './reducers';
import { mockFetchTodos } from './api';

function* fetchTodosSaga() {
    yield delay(500); // имитация задержки
    const data = yield mockFetchTodos();
    yield put(setTodos(data));
}

export default function* rootSaga() {
    yield takeEvery(fetchTodos.type, fetchTodosSaga);
}
