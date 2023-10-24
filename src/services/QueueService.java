@Service
public class QueueService {

  private Queue<Call> queue = new LinkedList<>();

  @Scheduled(fixedDelay = 1000) // Run every second
  public void updateWaitTime() {
    for (Call call : queue) {
      call.setWaitTime(call.getWaitTime() + 1);
    }
  }

  public void addCall(CallRequest request) {
    Call call = new Call(request.getCallerName(), request.getPhoneNumber());
    queue.add(call);
  }

  public void cancelCall(CancelRequest request) {
    Iterator<Call> iterator = queue.iterator();
    while (iterator.hasNext()) {
      Call call = iterator.next();
      if (call.getPhoneNumber().equals(request.getPhoneNumber())) {
        iterator.remove();
        break;
      }
    }
  }

  public void exitQueue(ExitRequest request) {
    Iterator<Call> iterator = queue.iterator();
    while (iterator.hasNext()) {
      Call call = iterator.next();
      if (call.getPhoneNumber().equals(request.getPhoneNumber())) {
        iterator.remove();
        break;
      }
    }
  }
}