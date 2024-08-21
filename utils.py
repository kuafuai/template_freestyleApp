from difflib import unified_diff
from typing import List, Dict

def compare_documents(old_content: List[str], new_content: List[str]) -> List[Dict[str, List[str]]]:
    """Compare two document contents and return the differences."""
    differences = []

    # Generate a unified diff between old and new content
    diff = list(unified_diff(old_content, new_content, lineterm='', fromfile='old_version', tofile='new_version'))

    if diff:
        differences.append({
            'old_version': old_content,
            'new_version': new_content,
            'diff': diff
        })
    
    return differences
