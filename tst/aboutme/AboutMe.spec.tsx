import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutMe from '../../src/aboutme/AboutMe';
import React from 'react';

describe('AboutMe', () => {
    it('test render', () => {
        const { unmount } = render(<AboutMe/>);

        expect(screen.getAllByText('About Me')).toHaveLength(2);

        unmount();
    });
});