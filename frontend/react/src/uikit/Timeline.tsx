import React from 'react';
import classNames from 'classnames';

interface TimelineProps {
    side?: string;
}

interface TimelineItemProps {
    message?: string;
    date?: string;
}

export const Timeline = ({
    side = 'right',
}: TimelineProps) => {
    return (
        <section className={classNames('timeline', side)}>
            <ul>
                <TimelineItem
                    message={'Some customers are unable to load Slack. We’re still actively investigating this issue, but we don’t have any new information to share at this time. We’ll keep you posted as soon as we have an update.'}
                    date={'Feb 22, 10:23 AM EST'}
                />
                <TimelineItem
                    message={'We\'re still actively investigating this issue, but we don’t have any new information to share at this time. Well be back with another update in 30 minutes.'}
                    date={'Feb 22, 10:18 AM EST'}
                />
                <TimelineItem
                    message={`Slack is not loading for some users. We are continuing to investigate the cause and will provide more information as soon as it's available.`}
                    date={'Feb 22, 09:59 AM EST'}
                />
                <TimelineItem
                    message={`We're still working towards a full resolution. We'll be back with another update soon. Thank you for your patience.`}
                    date={'Feb 22, 09:45 AM EST'}
                />
                <TimelineItem
                    message={`We’re investigating the issue where Slack is not loading for some users. We’re looking into the cause and will provide more information as soon as it's available.`}
                    date={'Feb 22, 09:30 AM EST'}
                />
            </ul>
        </section>
    );
}

const TimelineItem = ({ message, date }: TimelineItemProps) => {
    return (
        <li className={`timeline__item`}>
            { message && <p className={`timeline__item-message`}>{ message }</p> }
            { date && <p className={`timeline__item-date`}>{ date }</p> }
        </li>
    )
}
