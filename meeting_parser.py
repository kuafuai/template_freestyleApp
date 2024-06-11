# meeting_parser.py

class MeetingParser:
    def extract_topic(self, meeting_record):
        # Extract the topic from the meeting record
        # CODE: Extract the topic from the meeting record
        pass
    
    def extract_participants(self, meeting_record):
        # Extract the participants from the meeting record
        # CODE: Extract the participants from the meeting record
        pass
    
    def extract_discussion(self, meeting_record):
        # Extract the discussion from the meeting record
        # CODE: Extract the discussion from the meeting record
        pass
    
    def parse(self, meeting_record):
        meeting_info = {
            "topic": self.extract_topic(meeting_record),
            "participants": self.extract_participants(meeting_record),
            "discussion": self.extract_discussion(meeting_record)
        }
        
        return meeting_info
