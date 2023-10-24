@RestController
@RequestMapping("/api/queue")
public class QueueController {

  private final QueueService queueService;

  public QueueController(QueueService queueService) {
    this.queueService = queueService;
  }

  @PostMapping("/call")
  public void call(@RequestBody CallRequest request) {
    queueService.addCall(request);
  }

  @PostMapping("/cancel")
  public void cancel(@RequestBody CancelRequest request) {
    queueService.cancelCall(request);
  }

  @PostMapping("/exit")
  public void exit(@RequestBody ExitRequest request) {
    queueService.exitQueue(request);
  }
}
