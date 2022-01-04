const mergeRanges = (meetings) => {
  // Sort by start time
  meetings.sort((a, b) => a.startTime - b.startTime);

  // Initialize mergedMeetings with the earliest meeting
  let mergedMeetings = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let currentMeeting = meetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime,
      );
    } else {
      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
};
