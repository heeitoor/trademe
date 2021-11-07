export enum ProfileActions {
    CHANGE_NAME,
}

export const nameChange = (value: string) => ({
    type: ProfileActions.CHANGE_NAME,
    value: value
});
