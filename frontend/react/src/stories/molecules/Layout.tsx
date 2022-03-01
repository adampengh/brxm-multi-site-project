import React from 'react';

import { Container, Row, Column } from '../../uikit/Layout';

interface LayoutProps {
    containers?: number;
    rows?: number;
    columns?: number;
}

export const Layout = ({ containers, rows, columns }: LayoutProps) => {
    return (
        <div className='sb-layout'>
            {[...Array(containers)].map((x, i) =>
                <Container key={i}>
                    {[...Array(rows)].map((x, i) =>
                        <Row key={i}>
                            {[...Array(columns)].map((x, i) =>
                                <Column
                                    xs={12}
                                    // sm={3}
                                    md={6}
                                    lg={3}
                                    // xl={4}
                                    // xxl={3}
                                    key={i}
                                >
                                    Column
                                </Column>
                            )}
                        </Row>
                    )}
                </Container>
            )}
        </div>
    );
}
