import React from 'react';
import renderer from 'react-test-renderer';

import FightDetail from './FightDetail';
import {Fight} from '../../models/fight.model';
import {Athlete} from "../../models/athlete.model";

describe('FightDetail', () => {
    it('should be rendered', () => {
        const athlete1: Athlete = {
            id: '1',
            firstName: 'firstName1',
            lastName: 'lastName1',
            picture: 'asset.jpg',
            club: 'club',
            department: 'department'
        };
        const athlete2: Athlete = {
            id: '2',
            firstName: 'firstName2',
            lastName: 'lastName2',
            picture: 'asset.jpg',
            club: 'club',
            department: 'department'
        };
        const fight: Fight = {id: 'id', athlete1, athlete2, result: 'W', weight: 'M70'};
        const navigation: any = {getParam: () => fight};
        const rendered = renderer.create(<FightDetail navigation={navigation}/>);
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
