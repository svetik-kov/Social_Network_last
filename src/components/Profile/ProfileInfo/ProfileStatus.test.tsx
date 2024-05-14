import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from 'components/Profile/ProfileInfo/ProfileStatus';


describe(' ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(< ProfileStatus status={'hello my friend'} updateStatus={status => 'hello'}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test('after creating span should be in the state', () => {
        const component = create(< ProfileStatus status={'hello my friend'} updateStatus={status => 'hello'}/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('hello my friend');
    });
});

